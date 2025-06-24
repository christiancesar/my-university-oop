import type { Discipline, University } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import disciplinesJson from "../../../../assets/disciplines.json" with { type: "json" };
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],

})

type DisciplineJSON = {
  "Período": number,
  "Sigla": number,
  "Componente": string,
  "Tipo": "Regular" | "Atividade de Extensão",
  "Optativo": "Não" | "Sim",
  "Núcleo": "Comum",
  "CH Componente": string,
  "CH Teórica": number,
  "CH Prática": number,
  "Pré-Requisitos": string,
  "Co-Requisitos": string,
  "Classificação Complementar": string
};



async function main() {
  const disciplinesData = (disciplinesJson as DisciplineJSON[]).sort((a, b) => a['Período'] - b['Período']);
  let university: University| null;

  university = await prisma.university.findFirst({
    where: {
      name: "Universidade Federal de Rondonópolis"
    }
  });

  if (!university) {
    university = await prisma.university.create({
      data: {
        name: "Universidade Federal de Rondonópolis",
        address: {
          create: {
            city: "Rondonópolis",
            country: "Brasil",
            neighborhood: "Cidade Universitária",
            number: "5055",
            state: "MT",
            street: "Av. dos Estudantes",
            zipcode: "78736-900",
            complement: "Universidade",
          }
        }
      }
    })
  }

  console.log(university);
  let count = 1;
  for (const discipline of disciplinesData) {
    console.log(`#${count++}`, discipline);
    await createDiscipline(discipline, university);
  }
}

async function createDiscipline(discipline: DisciplineJSON, university: University): Promise<Discipline> {

  const disciplineExists = await prisma.discipline.findFirst({
    where: {
      name: discipline.Componente
    }
  });


  if(!disciplineExists) {
    const containsPreRequisite = discipline["Pré-Requisitos"].length > 0;

    let preRequisiteId: string | null = null;
    if (containsPreRequisite) {
      const disciplinePreRequisiteId = await existDisciplinePreRequisite(discipline, university)
      preRequisiteId = disciplinePreRequisiteId;
    }
    const name = discipline.Componente;
    const is_required = discipline.Optativo === "Não";
    const short_id = discipline.Sigla.toString();
    const period = discipline["Período"] === 9 ? null : discipline["Período"];
    const workload_practical = discipline["CH Prática"];
    const workload_theoretical = discipline["CH Teórica"];
    const pre_requisite_id = preRequisiteId;
    const university_id = university.id;
  
    const newDiscipline = await prisma.discipline.create({
      data: {
        name,
        short_id,
        period,
        pre_requisite_id,
        is_required,
        workload_practical,
        workload_theoretical,
        university_id
      }
    })
  
    return newDiscipline;
  }

  return disciplineExists;
}

async function existDisciplinePreRequisite(discipline: DisciplineJSON, university: University): Promise<string> {
  const disciplineName = discipline["Pré-Requisitos"];
  const disciplineExists = await prisma.discipline.findFirst({
    where: {
      name: disciplineName
    },
    select: {
      id: true
    }
  });

  if(!disciplineExists) {
    const disciplineCreated = await createDiscipline(discipline, university);
    return disciplineCreated.id;
  }

  return disciplineExists.id;
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

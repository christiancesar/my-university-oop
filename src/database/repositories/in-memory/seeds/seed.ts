import { Discipline } from "@src/database/model/discipline";
import disciplinesJson from "../../../../assets/disciplines.json" with { type: "json" };
import { University } from "@src/database/model/university";
import { Address } from "@src/database/model/address";
import { randomUUIDv7 } from "bun";


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

export class Seed {
  private disciplines: Discipline[];
  private disciplinesData: DisciplineJSON[];

  constructor() {
    this.disciplines = [];
    this.disciplinesData = (disciplinesJson as DisciplineJSON[]).sort((a, b) => a['Período'] - b['Período']);
  }

  async execute(): Promise<{
    university: University;
    address: Address;
    disciplines: Discipline[];
  }> {
    const address = new Address({
      id: randomUUIDv7(),
      city: "Rondonópolis",
      country: "Brasil",
      neighborhood: "Cidade Universitária",
      number: "5055",
      state: "MT",
      street: "Av. dos Estudantes",
      zipcode: "78736-900",
      complement: "Universidade",
      created_at: new Date(),
      updated_at: null,
    });

    const university = new University({
      id: randomUUIDv7(),
      name: "Universidade Federal de Rondonópolis",
      address_id: address.id,
      created_at: new Date(),
      updated_at: null,
    })
  
    for (const discipline of this.disciplinesData) {
      await this.createDiscipline(discipline, university);
    }

    return {
      university,
      address,
      disciplines: this.disciplines
    };
  }


  async createDiscipline(discipline: DisciplineJSON, university: University): Promise<Discipline> {

    const disciplineExists = this.disciplines.find(dp => dp.name === discipline.Componente);


    if(!disciplineExists) {
      const containsPreRequisite = discipline["Pré-Requisitos"].length > 0;

      let preRequisiteId: string | null = null;
      if (containsPreRequisite) {
        const disciplinePreRequisiteId = await this.existDisciplinePreRequisite(discipline, university)
        preRequisiteId = disciplinePreRequisiteId;
      }
      const name = discipline.Componente;
      const is_required = discipline.Optativo === "Não";
      const short_id = discipline.Sigla.toString();
      const period = discipline["Período"];
      const workload_practical = discipline["CH Prática"];
      const workload_theoretical = discipline["CH Teórica"];
      const pre_requisite_id = preRequisiteId;
      const university_id = university.id;
    
      const newDiscipline = await new Discipline({
        id: randomUUIDv7(),
        name,
        is_required,
        short_id,
        period,
        workload_practical,
        workload_theoretical,
        pre_requisite_id,
        university_id,
        created_at: new Date(),
        updated_at: null,
      })
    
      return newDiscipline;
    }

    return disciplineExists;
  }

  async existDisciplinePreRequisite(discipline: DisciplineJSON, university: University): Promise<string> {
    const disciplineName = discipline["Pré-Requisitos"];
    const disciplineExists = await this.disciplines.find(discipline => discipline.name === disciplineName);

    if(!disciplineExists) {
      const disciplineCreated = await this.createDiscipline(discipline, university);
      return disciplineCreated.id;
    }

    return disciplineExists.id;
  }
}

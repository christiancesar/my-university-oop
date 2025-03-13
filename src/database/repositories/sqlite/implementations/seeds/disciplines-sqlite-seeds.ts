import { sqlite } from "@src/database/providers/sqlite-connection-database.js";
import { randomUUID } from "node:crypto";
import { Discipline } from "@src/database/model/discipline.js";
import disciplinesJson from "../../../../../../assets/disciplines.json" with { type: "json" };
import { University } from "@src/database/model/university.js";

type DisciplineSeed = {
  "Período": number | null,
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

const disciplinesData = (disciplinesJson as DisciplineSeed[]).sort((a, b) => a['Pré-Requisitos'].localeCompare(b['Pré-Requisitos']));
// console.log(disciplinesData);

export class DisciplinesSqliteSeeds {
  async execute() {
    try {
      const createAddressBaseQuery = sqlite.prepare(
        "INSERT INTO addresses ( id, street, number, complement, neighborhood, city, state, country, zipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING *;"
      );
  
      const address = createAddressBaseQuery.get(
        randomUUID(),
        "Av. dos Estudantes",
        "5055",
        "",
        "Cidade Universitária",
        "Rondonópolis",
        "MT",
        "Brasil",
        "78736-900"
      ) as Discipline;
  
      const createUniversityBaseQuery = sqlite.prepare(
        "INSERT INTO universities (id, name, address_id) VALUES (?, ?, ?) RETURNING *;"
      );
  
      const university = createUniversityBaseQuery.get(
        randomUUID(),
        "Universidade Federal de Rondonópolis",
        address.id
      ) as University;
  
      for (const discipline of disciplinesData) {
        const createDisciplineBaseQuery = sqlite.prepare(
          "INSERT INTO disciplines (id, name, short_id, period, pre_requisite_id, is_required, workload_practical, workload_theoretical, university_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING *"
        );
        const id = randomUUID();
        const name = discipline.Componente;
        const is_required = discipline.Optativo === "Não";
        const short_id = discipline.Sigla.toString();
        const period = discipline["Período"] === 9 ? null : discipline["Período"];
        const workload_practical = discipline["CH Prática"];
        const workload_theoretical = discipline["CH Teórica"];
        const pre_requisite_id = null;
        const university_id = university.id;

        const newDiscipline = createDisciplineBaseQuery.get(
          id,
          name,
          short_id,
          period,
          pre_requisite_id,
          is_required ? 1 : 0,
          workload_practical,
          workload_theoretical,
          university_id,
        )
        console.log("Discipline created: ");
        console.log(newDiscipline);
      };
      
      for (const discipline of disciplinesData) {
        const containsPreRequisite = discipline["Pré-Requisitos"].length > 0;
  
        let preRequisiteId: string | null = null;
        if (containsPreRequisite) {
          const result = sqlite.prepare("SELECT id FROM disciplines WHERE name = ?").get(discipline["Pré-Requisitos"]) as { id: string };
          preRequisiteId = result ? result.id : null;
          
          sqlite.prepare(
            "UPDATE disciplines SET pre_requisite_id = ? WHERE name = ?;"
          ).get(preRequisiteId, discipline.Componente);
        }

      }
      
    } catch (error: any) {
      throw new Error("Error while seeding disciplines.", {
        cause: error,
      });
    }
  }
}

new DisciplinesSqliteSeeds().execute();

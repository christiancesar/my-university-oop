import { randomUUID } from "node:crypto";
import { Discipline } from "../model/discipline.js";
import { sqlite } from "../../../providers/sqlite-connection-database.js";
import { CreateDiscipline } from "../../dtos/create-discipline-dto.js";
import { FindDisciplineById } from "../../dtos/find-discipline-by-id-dto.js";
import { IDisciplinesRepository } from "../../interfaces/disciplines-repository.js";

export class DisciplinesRepositorySqlite implements IDisciplinesRepository {
  createDiscipline(data: CreateDiscipline): Discipline {
    try {
      const createDisciplineBaseQuery = sqlite.prepare(
        "INSERT INTO disciplines (id, name, short_id, period, pre_requisite_id, workload_pratical, workload_theoretical, university_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING *"
      );

      const discipline = createDisciplineBaseQuery.get(
        randomUUID(),
        data.name,
        data.short_id,
        data.period,
        data.pre_requisite_id ? data.pre_requisite_id : null,
        data.workload_pratical,
        data.workload_theoretical,
        data.university_id ? data.university_id : null
      ) as Discipline;

      return new Discipline(discipline);
    } catch (error) {
      throw new Error("Error while create discipline.", { cause: error });
    }
  }

  findDisciplineById({
    disciplineId,
  }: FindDisciplineById): Discipline | undefined {
    try {
      const discipline = sqlite
        .prepare("SELECT * FROM disciplines WHERE id = ?")
        .get(disciplineId) as Discipline | undefined;

      return discipline ? new Discipline(discipline) : undefined;
    } catch (error) {
      throw new Error("Error while find discipline by id.", { cause: error });
    }
  }
}

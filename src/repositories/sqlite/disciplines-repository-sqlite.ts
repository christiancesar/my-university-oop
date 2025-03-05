import { randomUUID } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import { SQLite } from "../../database/providers/sqlite.js";
import { Discipline } from "../../model/discipline.js";
import { CreateDiscipline } from "../dtos/create-discipline-dto.js";
import { IDisciplinesRepository } from "../interfaces/disciplines-repository.js";
import { FindDisciplineById } from "../dtos/find-discipline-by-id-dto.js";

export class DisciplinesRepositorySqlite implements IDisciplinesRepository {
  constructor(private database: DatabaseSync) {
    this.database = SQLite.getInstance();
  }

  createDiscipline(data: CreateDiscipline): Discipline {
    try {
      const createDisciplineBaseQuery = this.database.prepare(
        "INSERT INTO disciplines (id, name, short_id, period, pre_requisite_id, workload_pratical, workload_theoretical) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *"
      );

      const discipline = createDisciplineBaseQuery.get(
        randomUUID(),
        data.name,
        data.short_id,
        data.period,
        data.pre_requisite_id ? data.pre_requisite_id : null,
        data.workload_pratical,
        data.workload_theoretical
      ) as Discipline;

      return new Discipline(discipline);
    } catch (error) {
      throw new Error("Error while create disciplene.", { cause: error });
    }
  }

  findDisciplineById({
    disciplineId,
  }: FindDisciplineById): Discipline | undefined {
    try {
      const discipline = this.database
        .prepare("SELECT * FROM disciplines WHERE id = ?")
        .get(disciplineId) as Discipline | undefined;

      return discipline ? new Discipline(discipline) : undefined;
    } catch (error) {
      throw new Error("Error while find discipline by id.", { cause: error });
    }
  }
}

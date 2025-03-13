import { randomUUID } from "node:crypto";
import { Discipline } from "../../../model/discipline.js";
import { Discipline as DisciplineEntity } from "@entities/discipline.js";
import { sqlite } from "@database/providers/sqlite-connection-database.js";
import { CreateDiscipline } from "../../dtos/create-discipline-dto.js";
import { FindDisciplineById } from "../../dtos/find-discipline-by-id-dto.js";
import { IDisciplinesRepository } from "../../interfaces/disciplines-repository.js";
import { FindDisciplineByUniversityId } from "../../dtos/find-discipline-by-university-id.js";
import { DisciplineMapper } from "./mappers/discipline-mapper.js";

export class DisciplinesRepositorySqlite implements IDisciplinesRepository {
  async createDiscipline(data: CreateDiscipline): Promise<DisciplineEntity> {
    try {
      const createDisciplineBaseQuery = sqlite.prepare(
        "INSERT INTO disciplines (id, name, short_id, period, pre_requisite_id, workload_practical, workload_theoretical, university_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING *"
      );

      const discipline = createDisciplineBaseQuery.get(
        randomUUID(),
        data.name,
        data.short_id,
        data.period,
        data.pre_requisite_id ? data.pre_requisite_id : null,
        data.workload_practical,
        data.workload_theoretical,
        data.university_id
      ) as Discipline;

      return DisciplineMapper.toEntity(discipline);
    } catch (error) {
      throw new Error("Error while create discipline.", { cause: error });
    }
  }

  async findDisciplineById({
    disciplineId,
  }: FindDisciplineById): Promise<DisciplineEntity | undefined> {
    try {
      const discipline = sqlite
        .prepare("SELECT * FROM disciplines WHERE id = ?")
        .get(disciplineId) as Discipline | undefined;

      return discipline ? DisciplineMapper.toEntity(discipline) : undefined;
    } catch (error) {
      throw new Error("Error while find discipline by id.", { cause: error });
    }
  }

  async findDisciplinesByUniversityId({
    universityId,
  }: FindDisciplineByUniversityId): Promise<DisciplineEntity[]> {
    try {
      const disciplines = sqlite
        .prepare("SELECT * FROM disciplines WHERE university_id = ?")
        .all(universityId) as Discipline[];

      return disciplines.map((discipline) =>
        DisciplineMapper.toEntity(discipline)
      );
    } catch (error) {
      throw new Error("Error while find disciplines by university id.", {
        cause: error,
      });
    }
  }
}

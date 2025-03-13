import { Discipline } from "@entities/discipline.js";
import { CreateDiscipline } from "../dtos/create-discipline-dto.js";
import { FindDisciplineById } from "../dtos/find-discipline-by-id-dto.js";
import { FindDisciplineByUniversityId } from "../dtos/find-discipline-by-university-id.js";

export interface IDisciplinesRepository {
  createDiscipline(data: CreateDiscipline): Promise<Discipline>;
  findDisciplineById(data: FindDisciplineById): Promise<Discipline | undefined>;
  findDisciplinesByUniversityId(
    data: FindDisciplineByUniversityId
  ): Promise<Discipline[]>;
}

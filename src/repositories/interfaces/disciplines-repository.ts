import { Discipline } from "../../model/discipline.js";
import { CreateDiscipline } from "../dtos/create-discipline-dto.js";
import { FindDisciplineById } from "../dtos/find-discipline-by-id-dto.js";

export interface IDisciplinesRepository {
  createDiscipline(data: CreateDiscipline): Discipline;
  findDisciplineById(data: FindDisciplineById): Discipline | undefined;
}

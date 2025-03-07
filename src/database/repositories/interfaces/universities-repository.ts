import { University } from "../../../model/university.js";
import { CreateUniversity } from "../dtos/create-university-dto.js";
import { FindUniversityById } from "../dtos/find-university-by-id-dto.js";

export interface IUniversitiesRepository {
  createUniversity(data: CreateUniversity): Promise<University>;
  findUniversityById(data: FindUniversityById): Promise<University | undefined>;
  deleteUniversityById(data: FindUniversityById): Promise<boolean>;
}

import { University } from "../../../model/university.js";
import { CreateUniversity } from "../dtos/create-university-dto.js";
import { FindUniversityById } from "../dtos/find-university-by-id-dto.js";

export interface IUniversitiesRepository {
  createUniversity(data: CreateUniversity): University;
  findUniversityById(data: FindUniversityById): University | undefined;
}

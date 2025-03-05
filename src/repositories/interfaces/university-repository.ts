import { University } from "../../model/university.js";
import { CreateUniversity } from "../dtos/create-university-dto.js";
import { FindUniversityById } from "../dtos/find-university-by-id.js";

export interface IUniversityRepository {
  createUniversity(data: CreateUniversity): University;
  findUniversityById(data: FindUniversityById): University;
}

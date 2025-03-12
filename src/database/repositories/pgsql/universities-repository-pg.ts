import { University } from "../sqlite/model/university.js";
import { CreateUniversity } from "../dtos/create-university-dto.js";
import { FindUniversityById } from "../dtos/find-university-by-id-dto.js";
import { IUniversitiesRepository } from "../interfaces/universities-repository.js";

export class UniversitiesRepositoryPg implements IUniversitiesRepository {
  createUniversity(data: CreateUniversity): University {
    throw new Error("Method not implemented.");
  }
  findUniversityById(data: FindUniversityById): University | undefined {
    throw new Error("Method not implemented.");
  }
}

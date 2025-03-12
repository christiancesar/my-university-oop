import { University } from "../../../entities/university.js";
import { CreateUniversity } from "../dtos/create-university-dto.js";
import { FindUniversityById } from "../dtos/find-university-by-id-dto.js";
import {
  UpdateUniversity,
  UpdateUniversityAddress,
} from "../dtos/update-university-dto.js";

export interface IUniversitiesRepository {
  createUniversity(data: CreateUniversity): Promise<University>;
  findUniversityById(data: FindUniversityById): Promise<University | undefined>;
  deleteUniversityById(data: FindUniversityById): Promise<boolean>;
  updateUniversityById(data: UpdateUniversity): Promise<University>;
  updateUniversityAddressByUniversityId(
    data: UpdateUniversityAddress
  ): Promise<University>;
}

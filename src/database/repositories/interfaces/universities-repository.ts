import { University as UniversityEntity } from "../../../entities/university.js";
import { CreateUniversity } from "../dtos/create-university-dto.js";
import { FindUniversityById } from "../dtos/find-university-by-id-dto.js";
import { FindUniversityByName } from "../dtos/find-university-by-name-dto.js";
import {
  UpdateUniversity,
  UpdateUniversityAddress,
} from "../dtos/update-university-dto.js";

export interface IUniversitiesRepository {
  createUniversity(data: CreateUniversity): Promise<UniversityEntity>;
  findUniversityById(
    data: FindUniversityById
  ): Promise<UniversityEntity | undefined>;
  deleteUniversityById(data: FindUniversityById): Promise<boolean>;
  updateUniversityById(data: UpdateUniversity): Promise<UniversityEntity>;
  updateUniversityAddressByUniversityId(
    data: UpdateUniversityAddress
  ): Promise<UniversityEntity>;

  findUniversityByName(
    data: FindUniversityByName
  ): Promise<UniversityEntity | undefined>;
}

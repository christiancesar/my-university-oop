import { randomUUID } from "node:crypto";
import { sqlite } from "../../../providers/sqlite-connection-database.js";
import { CreateUniversity } from "../../dtos/create-university-dto.js";
import { FindUniversityById } from "../../dtos/find-university-by-id-dto.js";
import { IUniversitiesRepository } from "../../interfaces/universities-repository.js";
import { AppError } from "../../../../errors/AppError.js";
import {
  UpdateUniversity,
  UpdateUniversityAddress,
} from "../../dtos/update-university-dto.js";
import { University as UniversityEntity } from "../../../../entities/university.js";
import { University as UniversityModel } from "../../../../model/university.js";
import { Address as AddressModel } from "../../../../model/address.js";
import { UniversityAddressMapper } from "./mappers/university-address-mapper.js";

export class UniversitiesRepositorySqlite implements IUniversitiesRepository {
  async createUniversity(data: CreateUniversity): Promise<UniversityEntity> {
    try {
      const createUniversityBaseQuery = sqlite.prepare(
        "INSERT INTO universities (id, name, address_id) VALUES (?, ?, ?) RETURNING *"
      );

      const university = createUniversityBaseQuery.get(
        randomUUID(),
        data.name,
        data.addressId ? data.addressId : null
      ) as UniversityModel;

      const address = data.addressId
        ? (sqlite
            .prepare(`SELECT * FROM addresses WHERE id = ?`)
            .get(data.addressId) as AddressModel)
        : null;

      return UniversityAddressMapper.toEntity({ address, university });
    } catch (error) {
      console.log(error);
      throw new AppError("Error while create university.");
    }
  }

  async findUniversityById({
    universityId,
  }: FindUniversityById): Promise<UniversityEntity | undefined> {
    try {
      const university = sqlite
        .prepare("SELECT u.* FROM universities u WHERE u.id = ?")
        .get(universityId) as UniversityModel | undefined;

      const address = university?.address_id
        ? (sqlite
            .prepare(`SELECT * FROM addresses WHERE id = ?`)
            .get(university.address_id) as AddressModel)
        : null;

      return university
        ? UniversityAddressMapper.toEntity({ address, university })
        : undefined;
    } catch (error) {
      throw new Error("Error while find university by id.", { cause: error });
    }
  }

  async deleteUniversityById({
    universityId,
  }: FindUniversityById): Promise<boolean> {
    try {
      const university = sqlite
        .prepare("DELETE FROM universities WHERE id = ?")
        .get(universityId) as UniversityModel;

      return university ? true : false;
    } catch (error) {
      throw new Error("Error while delete university by id.", { cause: error });
    }
  }

  async updateUniversityById({
    universityId,
    name,
    addressId,
  }: UpdateUniversity): Promise<UniversityEntity> {
    try {
      const updateUniversityBaseQuery = sqlite.prepare(
        "UPDATE universities SET name = ?, address_id = ? WHERE id = ? RETURNING *"
      );

      updateUniversityBaseQuery.run(
        universityId,
        name,
        addressId ? addressId : null
      );

      const university = sqlite
        .prepare("SELECT u.*  FROM universities u WHERE u.id = ?")
        .get(universityId) as UniversityModel;

      const address = university?.address_id
        ? (sqlite
            .prepare(`SELECT * FROM addresses WHERE id = ?`)
            .get(university.address_id) as AddressModel)
        : null;

      return UniversityAddressMapper.toEntity({ address, university });
    } catch (error) {
      throw new Error("Error while update university", { cause: error });
    }
  }

  async updateUniversityAddressByUniversityId({
    universityId,
    addressId,
  }: UpdateUniversityAddress): Promise<UniversityEntity> {
    try {
      const updateUniversityBaseQuery = sqlite.prepare(
        "UPDATE universities SET address_id = ? WHERE id = ? RETURNING *"
      );

      updateUniversityBaseQuery.run(addressId, universityId);

      const university = sqlite
        .prepare("SELECT u.*  FROM universities u WHERE u.id = ?")
        .get(universityId) as UniversityModel;

      const address = university?.address_id
        ? (sqlite
            .prepare(`SELECT * FROM addresses WHERE id = ?`)
            .get(university.address_id) as AddressModel)
        : null;

      return UniversityAddressMapper.toEntity({ university, address });
    } catch (error) {
      throw new Error("Error while update university", { cause: error });
    }
  }
}

import { randomUUID } from "node:crypto";
import { University } from "../../../../model/university.js";
import { sqlite } from "../../../providers/sqlite-connection-database.js";
import { CreateUniversity } from "../../dtos/create-university-dto.js";
import { FindUniversityById } from "../../dtos/find-university-by-id-dto.js";
import { IUniversitiesRepository } from "../../interfaces/universities-repository.js";

export class UniversitiesRepositorySqlite implements IUniversitiesRepository {
  createUniversity(data: CreateUniversity): University {
    try {
      const createUniversityBaseQuery = data.addressId
        ? sqlite.prepare(
            "INSERT INTO universities (id, name, address_id) VALUES (?, ?, ?) RETURNING *"
          )
        : sqlite.prepare(
            "INSERT INTO universities (id, name) VALUES (?, ?) RETURNING *"
          );

      const university = createUniversityBaseQuery.get(
        randomUUID(),
        data.name,
        data.addressId ? data.addressId : null
      ) as University;

      return new University(university);
    } catch (error) {
      throw new Error("Error while create university.", { cause: error });
    }
  }

  findUniversityById({
    universityId,
  }: FindUniversityById): University | undefined {
    try {
      const university = sqlite
        .prepare("SELECT * FROM universities WHERE id = ?")
        .get(universityId) as University | undefined;

      return university ? new University(university) : undefined;
    } catch (error) {
      throw new Error("Error while find university by id.", { cause: error });
    }
  }
}

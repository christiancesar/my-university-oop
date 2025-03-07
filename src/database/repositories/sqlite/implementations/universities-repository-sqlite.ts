import { randomUUID } from "node:crypto";
import { University } from "../../../../model/university.js";
import { sqlite } from "../../../providers/sqlite-connection-database.js";
import { CreateUniversity } from "../../dtos/create-university-dto.js";
import { FindUniversityById } from "../../dtos/find-university-by-id-dto.js";
import { IUniversitiesRepository } from "../../interfaces/universities-repository.js";
import { AppError } from "../../../../errors/AppError.js";

export class UniversitiesRepositorySqlite implements IUniversitiesRepository {
  async createUniversity(data: CreateUniversity): Promise<University> {
    try {
      const createUniversityBaseQuery = sqlite.prepare(
        "INSERT INTO universities (id, name, address_id) VALUES (?, ?, ?) RETURNING *"
      );

      const university = createUniversityBaseQuery.get(
        randomUUID(),
        data.name,
        data.addressId ? data.addressId : null
      ) as University;

      return new University(university);
    } catch (error) {
      console.log(error);
      throw new AppError("Error while create university.");
    }
  }

  async findUniversityById({
    universityId,
  }: FindUniversityById): Promise<University | undefined> {
    try {
      const university = sqlite
        .prepare("SELECT * FROM universities WHERE id = ?")
        .get(universityId) as University | undefined;

      return university ? new University(university) : undefined;
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
        .get(universityId) as University;

      return university ? true : false;
    } catch (error) {
      throw new Error("Error while delete university by id.", { cause: error });
    }
  }
}

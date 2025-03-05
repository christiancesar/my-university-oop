import { randomUUID } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import { SQLite } from "../../database/providers/sqlite.js";
import { University } from "../../model/university.js";
import { CreateUniversity } from "../dtos/create-university-dto.js";
import { IUniversityRepository } from "../interfaces/university-repository.js";

export class UniversityRepositoriSqlite implements IUniversityRepository {
  constructor(private database: DatabaseSync) {
    this.database = SQLite.getInstance();
  }

  createUniversity(data: CreateUniversity): University {
    try {
      const createUniversityBaseQuery = data.addressId
        ? this.database.prepare(
            "INSERT INTO universities (id, name, address_id) VALUES (?, ?, ?) RETURNING *"
          )
        : this.database.prepare(
            "INSERT INTO universities (id, name) VALUES (?, ?) RETURNING *"
          );

      const university = createUniversityBaseQuery.get(
        randomUUID(),
        data.name,
        data.addressId ? data.addressId : null
      ) as University;

      return university;
    } catch (error) {
      throw new Error("Erro ao criar universidade");
    }
  }

  findUniversityById({ universityId }: { universityId: string }): University {
    try {
      const university = this.database
        .prepare("SELECT * FROM universities WHERE id = ?")
        .get(universityId) as University;

      return university;
    } catch (error) {
      throw new Error("Erro ao buscar universidade");
    }
  }
}

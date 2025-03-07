import { Router, Request, Response } from "express";
import { CreateUniversityUseCase } from "./use-cases/create-university-use-case.js";
import { UniversitiesRepositoryPg } from "./database/repositories/pgsql/universities-repository-pg.js";
import { UniversitiesRepositorySqlite } from "./database/repositories/sqlite/implementations/universities-repository-sqlite.js";

export const routes = Router();

const universitiesRepositorySQlite = new UniversitiesRepositorySqlite();

const createUniversity = new CreateUniversityUseCase(
  universitiesRepositorySQlite
);

routes.post("/universities", (request: Request, response: Response) => {
  const { name, addressId } = request.body; // Acessando o corpo da requisição

  const university = createUniversity.execute({
    name,
    addressId,
  });
  response.json(university);
});

import { Router, Request, Response } from "express";
import { CreateUniversityUseCase } from "./use-cases/create-university-use-case.js";
import { UniversitiesRepositoryPg } from "./database/repositories/pgsql/universities-repository-pg.js";
import { UniversitiesRepositorySqlite } from "./database/repositories/sqlite/implementations/universities-repository-sqlite.js";
import { FindUniversityUseCase } from "./use-cases/find-university-use-case.js";
import { DeleteUniversityByIdUseCase } from "./use-cases/delete-university-use-case.js";

export const routes = Router();

const universitiesRepositorySQlite = new UniversitiesRepositorySqlite();

const createUniversity = new CreateUniversityUseCase(
  universitiesRepositorySQlite
);

const findUniversityById = new FindUniversityUseCase(
  universitiesRepositorySQlite
);
const deleteUniversityById = new DeleteUniversityByIdUseCase(
  universitiesRepositorySQlite
);
routes.post("/universities", async (request: Request, response: Response) => {
  const { name, addressId } = request.body;

  const university = await createUniversity.execute({
    name,
    addressId,
  });
  response.json(university);
});

routes.get(
  "/universities/:universityId",
  async (request: Request, response: Response) => {
    const { universityId } = request.params;
    const university = await findUniversityById.execute({
      universityId,
    });
    response.json(university);
  }
);

routes.delete(
  "/universities/:universityId",
  async (request: Request, response: Response) => {
    const { universityId } = request.params;
    await deleteUniversityById.execute({
      universityId,
    });
    response.status(204).json();
  }
);

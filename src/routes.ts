import { Request, Response, Router } from "express";
import { CreateAddress } from "./database/repositories/dtos/create-address-dto.js";
import { AddressesRepositorySqlite } from "./database/repositories/sqlite/implementations/addresses-repository-sqlite.js";
import { UniversitiesRepositorySqlite } from "./database/repositories/sqlite/implementations/universities-repository-sqlite.js";
import { CreateAddressUseCase } from "./use-cases/create-address-use-case.js";
import { CreateUniversityUseCase } from "./use-cases/create-university-use-case.js";
import { DeleteUniversityByIdUseCase } from "./use-cases/delete-university-use-case.js";
import { FindUniversityUseCase } from "./use-cases/find-university-use-case.js";
import { UpdateUniversityUseCase } from "./use-cases/update-university-use-case.js";
import { DisciplinesRepositorySqlite } from "./database/repositories/sqlite/implementations/disciplines-repository-sqlite.js";
import { FindDisciplinesByUniversityIdUseCase } from "./use-cases/find-disciplines-by-university-id-use-case.js";

export const routes = Router();

//Repositories
const universitiesRepositorySQlite = new UniversitiesRepositorySqlite();
const addressesRepositorySQlite = new AddressesRepositorySqlite();
const disciplinesRepositorySQlite = new DisciplinesRepositorySqlite();

//Services
const createAddressUseCase = new CreateAddressUseCase(
  addressesRepositorySQlite
);
const updateUniversityUseCase = new UpdateUniversityUseCase(
  universitiesRepositorySQlite
);

const createUniversity = new CreateUniversityUseCase(
  universitiesRepositorySQlite,
  addressesRepositorySQlite
);

const findUniversityById = new FindUniversityUseCase(
  universitiesRepositorySQlite
);

const deleteUniversityById = new DeleteUniversityByIdUseCase(
  universitiesRepositorySQlite
);

const findDisciplinesByUniversityIdUseCase =
  new FindDisciplinesByUniversityIdUseCase(
    universitiesRepositorySQlite,
    disciplinesRepositorySQlite
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

routes.patch(
  "/universities/:universityId/address",
  async (request: Request, response: Response) => {
    const { universityId } = request.params;
    const address = request.body as CreateAddress;

    const newAddress = await createAddressUseCase.execute(address);
    const universityUpdated = await updateUniversityUseCase.execute({
      universityId,
      addressId: newAddress.id,
    });
    response.json(universityUpdated);
  }
);

routes.get(
  "/universities/:universityId/disciplines",
  async (request: Request, response: Response) => {
    const { universityId } = request.params;

    const disciplines = await findDisciplinesByUniversityIdUseCase.execute({
      universityId,
    });

    response.json(disciplines);
  }
);

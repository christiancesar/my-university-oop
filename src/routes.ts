import { Router, Request, Response } from "express";
import { CreateUniversityUseCase } from "./use-cases/create-university-use-case.js";
import { UniversitiesRepositoryPg } from "./database/repositories/pgsql/universities-repository-pg.js";
import { UniversitiesRepositorySqlite } from "./database/repositories/sqlite/implementations/universities-repository-sqlite.js";
import { FindUniversityUseCase } from "./use-cases/find-university-use-case.js";
import { DeleteUniversityByIdUseCase } from "./use-cases/delete-university-use-case.js";
import { CreateAddress } from "./database/repositories/dtos/create-address-dto.js";
import { AddressesRepositorySqlite } from "./database/repositories/sqlite/implementations/addresses-repository-sqlite.js";
import { CreateAddressUseCase } from "./use-cases/create-address-use-case.js";
import { UpdateUniversityUseCase } from "./use-cases/update-university-use-case.js";

export const routes = Router();

const universitiesRepositorySQlite = new UniversitiesRepositorySqlite();
const addressesRepository = new AddressesRepositorySqlite();

const createAddressUseCase = new CreateAddressUseCase(addressesRepository);
const updateUniversityUseCase = new UpdateUniversityUseCase(
  universitiesRepositorySQlite
);

const createUniversity = new CreateUniversityUseCase(
  universitiesRepositorySQlite,
  addressesRepository
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

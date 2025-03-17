import { Router } from "express";
import type { Request, Response } from "express";
import type { CreateAddress } from "./database/repositories/dtos/create-address-dto.js";
import { AddressesRepositoryPrisma } from "./database/repositories/prisma/address-repository-prisma.js";
import { DisciplinesRepositoryPrisma } from "./database/repositories/prisma/disciplines-repository-prisma.js";
import { UniversitiesRepositoryPrisma } from "./database/repositories/prisma/universities-repository-prisma.js";
import { CreateAddressUseCase } from "./use-cases/create-address-use-case.js";
import { CreateUniversityUseCase } from "./use-cases/create-university-use-case.js";
import { DeleteUniversityByIdUseCase } from "./use-cases/delete-university-use-case.js";
import { FindDisciplinesByUniversityIdUseCase } from "./use-cases/find-disciplines-by-university-id-use-case.js";
import { FindUniversityUseCase } from "./use-cases/find-university-use-case.js";
import { UpdateUniversityUseCase } from "./use-cases/update-university-use-case.js";

export const routes = Router();

//Repositories
const universitiesRepository = new UniversitiesRepositoryPrisma();
const addressesRepository = new AddressesRepositoryPrisma();
const disciplinesRepository = new DisciplinesRepositoryPrisma();

//Services
const createAddressUseCase = new CreateAddressUseCase(addressesRepository);
const updateUniversityUseCase = new UpdateUniversityUseCase(
  universitiesRepository
);

const createUniversity = new CreateUniversityUseCase(
  universitiesRepository,
  addressesRepository
);

const findUniversityById = new FindUniversityUseCase(universitiesRepository);

const deleteUniversityById = new DeleteUniversityByIdUseCase(
  universitiesRepository
);

const findDisciplinesByUniversityIdUseCase =
  new FindDisciplinesByUniversityIdUseCase(
    universitiesRepository,
    disciplinesRepository
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

import { prisma } from "@database/providers/prisma/prisma.js";
import type { CreateUniversity } from "@database/repositories/dtos/create-university-dto.js";
import type { FindUniversityById } from "@database/repositories/dtos/find-university-by-id-dto.js";
import type { FindUniversityByName } from "@database/repositories/dtos/find-university-by-name-dto.js";
import type { UpdateUniversityAddress } from "@database/repositories/dtos/update-university-dto.js";
import type { IUniversitiesRepository } from "@database/repositories/interfaces/universities-repository.js";
import { University as UniversityEntity } from "@entities/university.js";
import { UniversityMapper } from "./mappers/university-mapper.js";

export class UniversitiesRepositoryPrisma implements IUniversitiesRepository {
  async createUniversity({
    name,
    addressId,
  }: CreateUniversity): Promise<UniversityEntity> {
    const university = await prisma.university.create({
      data: {
        name,
        address_id: addressId,
      },
      include: {
        address: true,
        disciplines: true,
      },
    });

    return UniversityMapper.toEntity(university);
  }

  async findUniversityById({
    universityId,
  }: FindUniversityById): Promise<UniversityEntity | undefined> {
    const university = await prisma.university.findUnique({
      where: {
        id: universityId,
      },
      include: {
        address: true,
        disciplines: true,
      },
    });

    return university ? UniversityMapper.toEntity(university) : undefined;
  }

  async findUniversityByName({
    name,
  }: FindUniversityByName): Promise<UniversityEntity | undefined> {
    const university = await prisma.university.findFirst({
      where: {
        name,
      },
      include: {
        address: true,
        disciplines: true,
      },
    });

    return university ? UniversityMapper.toEntity(university) : undefined;
  }

  async deleteUniversityById({
    universityId,
  }: FindUniversityById): Promise<boolean> {
    const university = await prisma.university.delete({
      where: {
        id: universityId,
      },
    });

    return university ? true : false;
  }

  async updateUniversityById({
    universityId,
    addressId,
  }: UpdateUniversityAddress): Promise<UniversityEntity> {
    const university = await prisma.university.update({
      where: {
        id: universityId,
      },
      data: {
        address_id: addressId,
      },
      include: {
        address: true,
        disciplines: true,
      },
    });

    return UniversityMapper.toEntity(university);
  }
}

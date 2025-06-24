import { Discipline as DisciplineEntity } from "@entities/discipline.js";
import { prisma } from "@src/database/providers/prisma/prisma.js";
import type { CreateDiscipline } from "../dtos/create-discipline-dto.js";
import type { FindDisciplineById } from "../dtos/find-discipline-by-id-dto.js";
import type { FindDisciplineByUniversityId } from "../dtos/find-discipline-by-university-id.js";
import type { IDisciplinesRepository } from "../interfaces/disciplines-repository.js";
import { DisciplineMapper } from "./mappers/discipline-mapper.js";

export class DisciplinesRepositoryPrisma implements IDisciplinesRepository {
  async createDiscipline(data: CreateDiscipline): Promise<DisciplineEntity> {
    const discipline = await prisma.discipline.create({
      data,
    });

    return DisciplineMapper.toEntity(discipline);
  }

  async findDisciplineById({
    disciplineId,
  }: FindDisciplineById): Promise<DisciplineEntity | undefined> {
    const discipline = await prisma.discipline.findUnique({
      where: {
        id: disciplineId,
      },
    });

    return discipline ? DisciplineMapper.toEntity(discipline) : undefined;
  }

  async findDisciplinesByUniversityId({
    universityId,
  }: FindDisciplineByUniversityId): Promise<DisciplineEntity[]> {
    const disciplines = await prisma.discipline.findMany({
      where: {
        university_id: universityId,
      },
    });

    return disciplines.map(DisciplineMapper.toEntity);
  }
}

import { Discipline } from "@src/database/model/discipline.js";
import type { CreateDiscipline } from "../dtos/create-discipline-dto.js";
import type { FindDisciplineById } from "../dtos/find-discipline-by-id-dto.js";
import type { FindDisciplineByUniversityId } from "../dtos/find-discipline-by-university-id.js";
import type { IDisciplinesRepository } from "../interfaces/disciplines-repository.js";
import { randomUUIDv7 } from "bun";
import { DisciplineMapper } from "../prisma/mappers/discipline-mapper.js";
import { Discipline as DisciplineEntity } from "@entities/discipline.js";
/**
 * Repositório de Disciplinas em Memória
 */
export class InMemoryDisciplinesRepository implements IDisciplinesRepository {
  disciplines: Discipline[] = [];
  async createDiscipline(data: CreateDiscipline): Promise<DisciplineEntity> {
    const discipline = new Discipline({
      id: randomUUIDv7(),
      name: data.name,
      is_required: data.is_required,
      period: data.period,
      pre_requisite_id: data.pre_requisite_id,
      short_id: data.short_id,
      university_id: data.university_id,
      workload_practical: data.workload_practical,
      workload_theoretical: data.workload_theoretical,
      updated_at: new Date(),
      created_at: new Date(),
    });

    this.disciplines.push(discipline);

    return DisciplineMapper.toEntity({
      ...discipline,
      updated_at: discipline.updated_at!,
    });
  }
  async findDisciplineById(
    data: FindDisciplineById
  ): Promise<DisciplineEntity | undefined> {
    const discipline = this.disciplines.find(
      (dp) => dp.id === data.disciplineId
    );

    return discipline
      ? DisciplineMapper.toEntity({
          ...discipline,
          updated_at: discipline.updated_at!,
        })
      : undefined;
  }

  async findDisciplinesByUniversityId(
    data: FindDisciplineByUniversityId
  ): Promise<DisciplineEntity[]> {
    const disciplines = this.disciplines.filter(
      (dp) => dp.university_id === data.universityId
    );

    return disciplines.map((dp) =>
      DisciplineMapper.toEntity({
        ...dp,
        updated_at: dp.updated_at!,
      })
    );
  }
}

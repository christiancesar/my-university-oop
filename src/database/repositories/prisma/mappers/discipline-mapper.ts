import { Prisma } from "@prisma/client";
import { Discipline as DisciplineModel } from "@src/database/model/discipline.js";
import { Discipline as DisciplineEntity } from "@src/entities/discipline.js";
import { Workload } from "@src/entities/workload.js";

type DisciplineMapperToEntityProps = Prisma.DisciplineGetPayload<{}>;
export class DisciplineMapper {
  // static toPersistence(discipline) {
  //   return {
  //     id: discipline.id,
  //     name: discipline.name,
  //     short_id: discipline.shortId,
  //     period: discipline.period,
  //     pre_requisite_id: discipline.prerequisites?.id,
  //     workload_practical: discipline.workload.practical,
  //     workload_theoretical: discipline.workload.theoretical,
  //     university_id: discipline.university.id,
  //   };
  // }

  static toEntity(data: DisciplineMapperToEntityProps): DisciplineEntity {
    return new DisciplineEntity({
      id: data.id,
      name: data.name,
      isRequired: data.is_required,
      shortId: data.short_id,
      workload: new Workload(
        data.workload_practical,
        data.workload_theoretical
      ),
      period: data.period,
      prerequisiteId: data.pre_requisite_id,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    });
  }
}

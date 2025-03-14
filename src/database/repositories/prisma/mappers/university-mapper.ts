import { Address as AddressModel } from "@database/model/address.js";
import { Discipline as DisciplineModel } from "@database/model/discipline.js";
import { University as UniversityModel } from "@database/model/university.js";
import { University as UniversityEntity } from "@entities/university.js";
import { AddressMapper } from "./address-mapper.js";
import { DisciplineMapper } from "./discipline-mapper.js";
import { Prisma } from "@prisma/client";

type UniversityMapperProps = Prisma.UniversityGetPayload<{
  include: {
    address: true;
    disciplines: true;
  };
}>;
export class UniversityMapper {
  static toEntity(raw: UniversityMapperProps): UniversityEntity {
    const address = raw.address ? AddressMapper.toEntity(raw.address) : null;

    const disciplines =
      raw.disciplines && raw.disciplines.length > 0
        ? raw.disciplines.map((discipline) =>
            DisciplineMapper.toEntity(discipline)
          )
        : null;

    return new UniversityEntity({
      id: raw.id,
      name: raw.name,
      address,
      disciplines: disciplines,
      createdAt: raw.created_at,
      updatedAt: raw.updated_at,
    });
  }
}

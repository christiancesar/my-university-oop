import { Address as AddressEntity } from "@entities/address.js";
import { Address as AddressModel } from "@database/model/address.js";
import { University as UniversityEntity } from "@entities/university.js";
import { University as UniversityModel } from "@database/model/university.js";
import { Discipline as DisciplineEntity } from "@entities/discipline.js";
import { Discipline as DisciplineModel } from "@database/model/discipline.js";
import { DisciplineMapper } from "./discipline-mapper.js";
import { AddressMapper } from "./address-mapper.js";

type UniversityMapperProps = {
  university: UniversityModel;
  address: AddressModel | null;
  disciplines: DisciplineModel[] | null;
};
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
      id: raw.university.id,
      name: raw.university.name,
      address,
      disciplines: disciplines,
    });
  }
}

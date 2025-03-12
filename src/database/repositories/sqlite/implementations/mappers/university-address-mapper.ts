import { Address as AddressEntity } from "../../../../../entities/address.js";
import { Address as AddressModel } from "../../../../../model/address.js";
import { University as UniversityEntity } from "../../../../../entities/university.js";
import { University as UniversityModel } from "../../../../../model/university.js";

type UniversityAddress = {
  university: UniversityModel;
  address: AddressModel | null;
};
export class UniversityAddressMapper {
  static toEntity(raw: UniversityAddress): UniversityEntity {
    const address = raw.address
      ? new AddressEntity({
          id: raw.address.id,
          street: raw.address.street,
          city: raw.address.city,
          number: raw.address.number,
          country: raw.address.country,
          complement: raw.address.complement,
          neighborhood: raw.address.neighborhood,
          state: raw.address.state,
          zipCode: raw.address.zipcode,
        })
      : null;
    return new UniversityEntity({
      id: raw.university.id,
      name: raw.university.name,
      address,
    });
  }
}

import { Address as AddressEntity } from "@entities/address.js";
import { Address as AddressModel } from "@database/model/address.js";
import { Prisma } from "@prisma/client";

type AddressMapperToEntityProps = Prisma.AddressGetPayload<{}>;

export class AddressMapper {
  static toEntity(raw: AddressMapperToEntityProps): AddressEntity {
    return new AddressEntity({
      id: raw.id,
      street: raw.street,
      city: raw.city,
      number: raw.number,
      country: raw.country,
      complement: raw.complement,
      neighborhood: raw.neighborhood,
      state: raw.state,
      zipCode: raw.zipcode,
      createdAt: raw.created_at,
      updatedAt: raw.updated_at,
    });
  }
}

import { CreateAddress } from "@database/repositories/dtos/create-address-dto.js";
import { FindAddressById } from "@database/repositories/dtos/find-address-by-id-dto.js";
import { Address } from "@entities/address.js";
import { prisma } from "@src/database/providers/prisma/prisma.js";
import { AddressMapper } from "./mappers/address-mapper.js";
import { IAddressesRepository } from "../interfaces/addresses-repository.js";

export class AddressesRepositoryPrisma implements IAddressesRepository {
  async createAddress(data: CreateAddress): Promise<Address> {
    const address = await prisma.address.create({
      data,
    });

    return AddressMapper.toEntity(address);
  }

  async findAddressById({
    addressId,
  }: FindAddressById): Promise<Address | undefined> {
    const address = await prisma.address.findUnique({
      where: {
        id: addressId,
      },
    });

    return address ? AddressMapper.toEntity(address) : undefined;
  }
}

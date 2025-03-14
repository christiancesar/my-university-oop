import { Address } from "@src/entities/address.js";
import { CreateAddress } from "../dtos/create-address-dto.js";
import { FindAddressById } from "../dtos/find-address-by-id-dto.js";

export interface IAddressesRepository {
  createAddress(data: CreateAddress): Promise<Address>;
  findAddressById(data: FindAddressById): Promise<Address | undefined>;
}

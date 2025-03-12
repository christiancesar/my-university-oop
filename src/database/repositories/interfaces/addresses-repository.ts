import { Address } from "../sqlite/model/address.js";
import { CreateAddress } from "../dtos/create-address-dto.js";
import { FindAddressById } from "../dtos/find-address-by-id-dto.js";

export interface IAddressesRepository {
  createAddress(data: CreateAddress): Address;
  findAddressById(data: FindAddressById): Address | undefined;
}

import { CreateAddress } from "../database/repositories/dtos/create-address-dto.js";
import { IAddressesRepository } from "../database/repositories/interfaces/addresses-repository.js";
import { Address } from "../database/repositories/sqlite/model/address.js";

export class CreateAddressUseCase {
  constructor(private addressesRepository: IAddressesRepository) {}

  async execute(data: CreateAddress): Promise<Address> {
    const address = await this.addressesRepository.createAddress(data);

    return address;
  }
}

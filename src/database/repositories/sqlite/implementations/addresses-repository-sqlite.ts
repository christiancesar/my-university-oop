import { randomUUID } from "node:crypto";
import { Address } from "../model/address.js";
import { CreateAddress } from "../../dtos/create-address-dto.js";
import { FindAddressById } from "../../dtos/find-address-by-id-dto.js";
import { sqlite } from "../../../providers/sqlite-connection-database.js";

export class AddressesRepositorySqlite {
  createAddress(data: CreateAddress): Address {
    try {
      const createAddressBaseQuery = sqlite.prepare(
        "INSERT INTO addresses ( id, street, number, complement, neighborhood, city, state, country, zipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING *"
      );

      const address = createAddressBaseQuery.get(
        randomUUID(),
        data.street,
        data.number,
        data.complement ? data.complement : null,
        data.neighborhood,
        data.city,
        data.state,
        data.country,
        data.zipcode
      ) as Address;

      return new Address(address);
    } catch (error) {
      throw new Error("Error while create address.", { cause: error });
    }
  }

  findAddressById({ addressId }: FindAddressById): Address | undefined {
    try {
      const address = sqlite
        .prepare("SELECT * FROM addresses WHERE id = ?")
        .get(addressId) as Address | undefined;

      return address ? new Address(address) : undefined;
    } catch (error) {
      throw new Error("Error while find address by id.", { cause: error });
    }
  }
}

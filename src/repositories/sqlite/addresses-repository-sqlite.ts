import { randomUUID } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import { SQLite } from "../../database/providers/sqlite.js";
import { University } from "../../model/university.js";
import { CreateUniversity } from "../dtos/create-university-dto.js";
import { FindUniversityById } from "../dtos/find-university-by-id-dto.js";
import { IAddressesRepository } from "../interfaces/addresses-repository.js";
import { Address } from "../../model/address.js";
import { CreateAddress } from "../dtos/create-address-dto.js";
import { FindAddressById } from "../dtos/find-address-by-id-dto.js";

export class AddressesRepositorySqlite implements IAddressesRepository {
  constructor(private database: DatabaseSync) {
    this.database = SQLite.getInstance();
  }

  createAddress(data: CreateAddress): Address {
    try {
      const createAddressBaseQuery = this.database.prepare(
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
      const address = this.database
        .prepare("SELECT * FROM addresses WHERE id = ?")
        .get(addressId) as Address | undefined;

      return address ? new Address(address) : undefined;
    } catch (error) {
      throw new Error("Error while find address by id.", { cause: error });
    }
  }
}

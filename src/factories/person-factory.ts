import { faker } from "@faker-js/faker";
import { Person } from "../entities/person.js";
import { Address } from "../entities/address.js";

type PersonFactoryParams = {
  id?: string;
  name?: string;
  birthday?: Date;
};

/**
 * Fábrica para criar instâncias de Person.
 */
export class PersonFactory {
  /**
   * Cria uma nova instância de Person.
   * @param ctor Construtor da classe que estende Person.
   * @param params Parâmetros opcionais para criar a Person.
   * @returns Uma nova instância de Person.
   */
  static make<T extends Person>(
    ctor: new (name: string, cpf: string, birthday: Date, id?: string) => T,
    params?: PersonFactoryParams
  ): T {
    const name = params?.name ?? faker.person.fullName();
    const cpf = "123.456.789-00";
    const birthday = faker.date.birthdate();

    const newPerson = new ctor(name, cpf, birthday, params?.id);
    newPerson.setAddresses(
      new Address(
        faker.location.street(),
        faker.location.buildingNumber(),
        faker.location.city(),
        faker.location.state(),
        faker.location.country(),
        faker.location.zipCode()
      )
    );

    return newPerson;
  }
}

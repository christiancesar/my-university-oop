import { fa, faker } from "@faker-js/faker";
import { Teacher } from "../teacher.js";
import { Address } from "../address.js";

type TeacherFactoryParams = {
  id?: string;
  name?: string;
};

/**
 * Fábrica para criar instâncias de Teacher.
 */
export class TeacherFactory {
  /**
   * Cria uma nova instância de Teacher.
   * @param teacher Parâmetros opcionais para criar o Teacher.
   * @returns Uma nova instância de Teacher.
   */
  static make(teacher?: TeacherFactoryParams): Teacher {
    const name =
      teacher?.name ?? `${faker.person.firstName()} ${faker.person.lastName()}`;
    const cpf = "123.456.789-00";
    const birthday = faker.date.birthdate();

    const newTeacher = new Teacher(name, cpf, birthday);
    newTeacher.setAddresses(
      new Address(
        faker.location.street(),
        faker.location.buildingNumber(),
        faker.location.city(),
        faker.location.state(),
        faker.location.country(),
        faker.location.zipCode()
      )
    );

    return newTeacher;
  }
}

import { fa, faker } from "@faker-js/faker";
import { Teacher } from "../entities/teacher.js";
import { Address } from "../entities/address.js";

type TeacherFactoryParams = {
  id?: string;
  name?: string;
};

export class TeacherFactory {
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

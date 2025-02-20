import { fa, faker } from "@faker-js/faker";
import { Student } from "../entities/student.js";
import { Address } from "../entities/address.js";

type StudentsFactoryParams = {
  id?: string;
  name?: string;
};

export class StudentFactory {
  static make(student?: StudentsFactoryParams): Student {
    const name =
      student?.name ?? `${faker.person.firstName()} ${faker.person.lastName()}`;
    const cpf = "123.456.789-00";
    const birthday = faker.date.birthdate();

    const newStudent = new Student(name, cpf, birthday);
    newStudent.setAddresses(
      new Address(
        faker.location.street(),
        faker.location.buildingNumber(),
        faker.location.city(),
        faker.location.state(),
        faker.location.country(),
        faker.location.zipCode()
      )
    );

    return newStudent;
  }
}

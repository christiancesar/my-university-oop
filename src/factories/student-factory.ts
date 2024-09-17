import { Student } from "../entities/inheritance-examples/student-inheritance.js";

type StudentsFactoryParams = {
  id?: string;
  name?: string;
};

export class StudentFactory {
  static make(student?: StudentsFactoryParams): Student {
    const name = student?.name ?? "nome-padrão";

    return new Student(name);
  }
}

import { Student } from "../entities/student.js";

type StudentsFactoryParams = {
  id?: string;
  name?: string;
};
export class StudentsFactory {
  static make(student?: StudentsFactoryParams): Student {
    const name = student?.name ?? "nome-padrão";

    return new Student(name);
  }
}

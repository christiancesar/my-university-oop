import { Discipline } from "../entities/discipline.js";
import { Student } from "../entities/student.js";

type StudentsFactoryParams = {
  id?: string;
  name?: string;
  email?: string;
  disciplines?: Discipline[];
};
export class StudentsFactory {
  static make(student: StudentsFactoryParams): Student {
    const name = student.name ?? "nome-padrão";
    const disciplines = student.disciplines ?? [];

    return new Student(name, disciplines);
  }
}

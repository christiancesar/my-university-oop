import { StudentDiscipline } from "../entities/student-discipline.js";
import { Student } from "../entities/student.js";

type StudentsFactoryParams = {
  id?: string;
  name?: string;
  email?: string;
  discipline?: StudentDiscipline[];
};
export class StudentsFactory {
  static make(student: StudentsFactoryParams): Student {
    const name = student.name ?? "nome-padrão";
    const disciplines = student.discipline ?? [];
    return new Student(name, disciplines);
  }
}

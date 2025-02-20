import { Student } from "../entities/student.js";
import { StudentFactory } from "../factories/student-factory.js";
type StudentsSeedProps = {
  generateStudentsCount: number;
};

export class StudentsSeed {
  static execute(params?: StudentsSeedProps): Student[] {
    const count = params?.generateStudentsCount ?? 40;
    const students: Student[] = [];

    Array.from({ length: count }).forEach(() => {
      students.push(StudentFactory.make());
    });

    return students;
  }
}

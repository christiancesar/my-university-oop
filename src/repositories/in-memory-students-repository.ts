import { Student } from "../entities/student.js";

export class InMemoryStudentsRepository {
  private students: Student[] = [];

  save(student: Student): void {
    this.students.push(student);
  }

  findById(id: string): Student | undefined {
    return this.students.find((student) => student.getId() === id);
  }

  findAll(): Student[] {
    return this.students;
  }
}

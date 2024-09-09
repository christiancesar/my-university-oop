import { Student } from "../entities/student.js";

export class InMemoryStudentsRepository {
  private students: Student[] = [];

  save(student: Student): void {
    this.students.push(student);
  }

  findById(id: string): Student | undefined {
    return this.students.find((student) => student.getId() === id);
  }

  findByName(name: string): Student[] | undefined {
    return this.students.filter(
      (student) => student.getName().toLocaleLowerCase().search(name) !== -1
    );
  }

  findAll(): Student[] {
    return this.students;
  }
}

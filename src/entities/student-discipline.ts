/**
 * Classe que representa um estudante em uma disciplina.
 */
import { Student } from "./student.js";
import { Workload } from "./workload.js";

export class StudentOfDiscipline {
  student: Student;
  grade: number[];
  finalGrade: number | null;
  workload: Workload;
  itApproved: boolean;
  isFinished: boolean;
  description: string;

  /**
   * Construtor da classe StudentOfDiscipline.
   * @param student - Estudante matriculado na disciplina.
   */
  constructor(student: Student) {
    this.student = student;
    this.grade = [];
    this.finalGrade = null;
    this.workload = new Workload(0, 0);
    this.itApproved = false;
    this.isFinished = false;
    this.description = "";
  }
}

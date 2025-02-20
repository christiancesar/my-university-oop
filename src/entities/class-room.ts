/**
 * Classe que representa uma sala de aula.
 */
import { Discipline } from "./discipline.js";
import { Entity } from "./entity.js";
import { StudentOfDiscipline } from "./student-discipline.js";
import { Student } from "./student.js";
import { Teacher } from "./teacher.js";
import { Workload } from "./workload.js";

export class ClassRoom extends Entity {
  private discipline: Discipline;
  private teacher: Teacher;
  private students: StudentOfDiscipline[];
  private createdAt: Date;
  private updatedAt?: Date | null;
  private conclusedAt?: Date | null;

  /**
   * Construtor da classe ClassRoom.
   * @param discipline - Disciplina da sala de aula.
   * @param teacher - Professor da sala de aula.
   * @param Id - Id opcional da sala de aula.
   */
  constructor(discipline: Discipline, teacher: Teacher, id?: string) {
    super(id);
    this.teacher = teacher;
    this.discipline = discipline;
    this.students = [];
    this.createdAt = new Date();
  }

  /**
   * Obtém a disciplina da sala de aula.
   * @returns A disciplina.
   */
  getDiscipline(): Discipline {
    return this.discipline;
  }

  /**
   * Obtém os estudantes da sala de aula.
   * @returns A lista de estudantes.
   */
  getStudents(): StudentOfDiscipline[] {
    return this.students;
  }

  /**
   * Adiciona um estudante à sala de aula.
   * @param student - Estudante a ser adicionado.
   */
  public addStudent(student: Student): void {
    this.students.push(new StudentOfDiscipline(student));
    this.updatedAt = new Date();
  }

  /**
   * Finaliza a sala de aula.
   */
  public fineshedClass(): void {
    this.conclusedAt = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Atualiza a carga horária de um estudante.
   * @param studentId - ID do estudante.
   * @param workload - Nova carga horária.
   */
  public updateWorkloadStudent(studentId: string, workload: Workload): void {
    const student = this.students.find(
      (studentClassRomm) => studentClassRomm.student.getId() === studentId
    );

    if (student) {
      if (student.workload.getTotal() < this.discipline.workload.getTotal()) {
        if (student.workload.getPratical() < workload.getPratical()) {
          student.workload.setPratical(workload.getPratical());
        }

        if (student.workload.getTheorical() < workload.getTheorical()) {
          student.workload.setTheorical(workload.getTheorical());
        }
        this.updatedAt = new Date();
      }
    } else {
      throw new Error("Student not found");
    }
  }

  /**
   * Atualiza a nota de um estudante.
   * @param studentId - ID do estudante.
   * @param grade - Nova nota.
   */
  public updateGradeStudent(studentId: string, grade: number): void {
    const student = this.students.find(
      (student) => student.student.getId() === studentId
    );

    if (student) {
      student.grade.push(grade);
      this.updatedAt = new Date();
    } else {
      throw new Error("Student not found");
    }
  }

  /**
   * Calcula a média dos estudantes.
   */
  public calculateAverageStudents(): void {
    this.students.forEach((student) => {
      const sum = student.grade.reduce((acc, grade) => acc + grade, 0);
      const average = sum / student.grade.length;
      const workloadPercent =
        (student.workload.getTotal() / this.discipline.workload.getTotal()) *
        100;
      student.itApproved = average >= 6 && workloadPercent >= 75;
      student.finalGrade = average;
      student.isFinished = true;
      student.description = student.itApproved
        ? `The Student approved: with grade ${average} and worload ${workloadPercent}%`
        : `The Student was not approved: grade ${average} and worload ${workloadPercent}%`;
    });

    this.conclusedAt = new Date();
  }

  /**
   * Mostra a nota final dos estudantes.
   */
  public showTheFinalGrade(): void {
    if (this.conclusedAt) {
      this.students.forEach((student) => {
        console.log(`
          Student: ${student.student.getName()}
          Grade: ${student.finalGrade}
          Workload: ${student.workload.getTotal()}
          Description: ${student.description}
        `);
      });
    } else {
      console.error("The class is not finished");
    }
  }
}

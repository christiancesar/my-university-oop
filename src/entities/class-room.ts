import { Discipline } from "./discipline.js";
import { Entity } from "./entity.js";
import { Student } from "./student.js";
import { Workload } from "./workload.js";

class StudentOfDiscipline {
  student: Student;
  grade: number[];
  finalGrade: number | null;
  workload: Workload;
  itApproved: boolean;
  isFinished: boolean;
  description: string;

  constructor(student: Student) {
    this.student = student;
    this.grade = [0];
    this.finalGrade = null;
    this.workload = new Workload(0, 0);
    this.itApproved = false;
    this.isFinished = false;
    this.description = "";
  }
}

export class ClassRoom extends Entity {
  private discipline: Discipline;
  private students: StudentOfDiscipline[];
  private createdAt: Date;
  private updatedAt?: Date | null;
  private conclusedAt?: Date | null;

  constructor(discipline: Discipline, id?: string) {
    super(id);
    this.discipline = discipline;
    this.students = [];
    this.createdAt = new Date();
  }

  getDiscipline(): Discipline {
    return this.discipline;
  }

  getStudents(): StudentOfDiscipline[] {
    return this.students;
  }

  public addStudent(student: Student): void {
    this.students.push(new StudentOfDiscipline(student));
    this.updatedAt = new Date();
  }

  public fineshedClass(): void {
    this.conclusedAt = new Date();
    this.updatedAt = new Date();
  }

  public updateWorkloadStudent(studentId: string, workload: Workload): void {
    const student = this.students.find(
      (student) => student.student.getId() === studentId
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
        : `The Student was not approved: with grade ${average} and worload ${workloadPercent}%`;
    });

    this.conclusedAt = new Date();
  }

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

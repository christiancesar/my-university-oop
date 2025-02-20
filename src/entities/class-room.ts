import { Discipline } from "./discipline.js";
import { Entity } from "./entity.js";
import { StudentOfDiscipline } from "./student-discipline.js";
import { Student } from "./student.js";
import { Teacher } from "./teacher.js";
import { Workload } from "./workload.js";

class DailyReport extends Entity {
  description: string;
  classRoomWorkload: Workload;
  private createdAt: Date;

  constructor(description: string, classRoomWorkload: Workload, id?: string) {
    super(id);
    this.description = description;
    this.classRoomWorkload = classRoomWorkload;
    this.createdAt = new Date();
  }
}

export class ClassRoom extends Entity {
  private discipline: Discipline;
  private teacher: Teacher;
  private students: StudentOfDiscipline[];
  private dailyReports: DailyReport[];
  private createdAt: Date;
  private updatedAt?: Date | null;
  private conclusedAt?: Date | null;

  constructor(discipline: Discipline, teacher: Teacher, id?: string) {
    super(id);
    this.teacher = teacher;
    this.discipline = discipline;
    this.students = [];
    this.dailyReports = [];
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

  public updateWorkloadStudent(studentId: string, dailyId: string): void {
    try {
      const student = this.students.find(
        (studentClassRomm) => studentClassRomm.student.getId() === studentId
      );
      const dailyExist = this.dailyReports.find(
        (daily) => daily.getId() === dailyId
      );

      if (!student) {
        throw new Error("Student not found");
      }

      if (!dailyExist) {
        throw new Error("Daily not found");
      }

      student.workload.setPratical(dailyExist.classRoomWorkload.getPratical());

      student.workload.setTheorical(
        dailyExist.classRoomWorkload.getTheorical()
      );

      this.updatedAt = new Date();
    } catch (error: any) {
      console.error(error.message);
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

  public createDailyReport(
    description: string,
    classRoomWorkload: Workload
  ): { dailyId: string } | null {
    try {
      const workloadDisciplinePraticalTotal =
        this.discipline.workload.getPratical();
      const workloadDisciplineTheoricalTotal =
        this.discipline.workload.getTheorical();

      if (classRoomWorkload.getPratical() > workloadDisciplinePraticalTotal) {
        throw new Error("Pratical workload is greater than discipline");
      }

      if (classRoomWorkload.getTheorical() > workloadDisciplineTheoricalTotal) {
        throw new Error("Theorical workload is greater than discipline");
      }

      const daily = new DailyReport(description, classRoomWorkload);
      this.dailyReports.push(daily);

      return { dailyId: daily.getId() };
    } catch (error: any) {
      console.error("Daily cannot be created becouse: ", error.message);
      return null;
    }
  }

  private calculateAverageStudents(): void {
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
  }

  public endClass(): void {
    try {
      this.calculateAverageStudents();
      this.conclusedAt = new Date();
      this.showTheBulletin();
    } catch (error: any) {
      console.error("The class is not finished", error.message);
    }
  }

  private showTheBulletin(): void {
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

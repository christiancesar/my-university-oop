import { Entity } from "./entity.js";
import { Workload } from "./workload.js";

export class StudentDiscipline extends Entity {
  private disciplineId: string;
  private studentId: string;
  private grade: number[];
  private workload: Workload;
  private itApproved: boolean;
  private isFinished: boolean;
  private createdAt: Date;
  private updatedAt?: Date | null;
  private conclusedAt?: Date | null;

  constructor(
    disciplineId: string,
    studentId: string,
    createdAt: Date,
    id?: string
  ) {
    super(id);
    this.disciplineId = disciplineId;
    this.studentId = studentId;
    this.createdAt = createdAt ?? new Date();
    this.itApproved = false;
    this.isFinished = false;
    this.grade = [];
    this.workload = new Workload(0, 0);
  }

  setWorkload(workload: Workload): void {
    this.workload = workload;
    this.updatedAt = new Date();
  }

  setGrade(grade: number): void {
    this.grade?.push(grade);
  }
}

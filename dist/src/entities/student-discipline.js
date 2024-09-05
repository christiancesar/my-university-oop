import { Entity } from "./entity.js";
import { Workload } from "./workload.js";
export class StudentDiscipline extends Entity {
    disciplineId;
    studentId;
    grade;
    workload;
    itApproved;
    isFinished;
    createdAt;
    updatedAt;
    conclusedAt;
    constructor(disciplineId, studentId, createdAt, id) {
        super(id);
        this.disciplineId = disciplineId;
        this.studentId = studentId;
        this.createdAt = createdAt ?? new Date();
        this.itApproved = false;
        this.isFinished = false;
        this.grade = [];
        this.workload = new Workload(0, 0);
    }
    setWorkload(workload) {
        this.workload = workload;
        this.updatedAt = new Date();
    }
    setGrade(grade) {
        this.grade?.push(grade);
    }
}

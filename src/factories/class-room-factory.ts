import { ClassRoom } from "../entities/class-room.js";
import { Discipline } from "../entities/discipline.js";
import { Teacher } from "../entities/teacher.js";
import { DisciplineFactory } from "./discipline-factory.js";
import { TeacherFactory } from "./teacher-factory.js";

type ClassRoomFactoryParams = {
  discipline: Discipline;
  teacher?: Teacher;
};

export class ClassRoomFactory {
  static make(classRoom?: ClassRoomFactoryParams): ClassRoom {
    const discipline = classRoom?.discipline ?? DisciplineFactory.make();
    const teacher = classRoom?.teacher ?? TeacherFactory.make();
    const classRoomCreated = new ClassRoom(discipline, teacher);

    return classRoomCreated;
  }
}

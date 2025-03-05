import { ClassRoom } from "../entities/class-room.js";
import { Discipline } from "../entities/discipline.js";
import { Teacher } from "../entities/teacher.js";
import { DisciplineFactory } from "./discipline-factory.js";
import { TeacherFactory } from "./teacher-factory.js";

type ClassRoomFactoryParams = {
  discipline: Discipline;
  teacher?: Teacher;
};

/**
 * Fábrica para criar instâncias de ClassRoom.
 */
export class ClassRoomFactory {
  /**
   * Cria uma nova instância de ClassRoom.
   * @param classRoom Parâmetros opcionais para criar a ClassRoom.
   * @returns Uma nova instância de ClassRoom.
   */
  static make(classRoom?: ClassRoomFactoryParams): ClassRoom {
    const discipline = classRoom?.discipline ?? DisciplineFactory.make();
    const teacher = classRoom?.teacher ?? TeacherFactory.make();
    const classRoomCreated = new ClassRoom("", discipline, teacher);

    return classRoomCreated;
  }
}

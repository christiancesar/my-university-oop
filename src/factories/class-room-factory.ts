import { ClassRoom } from "../entities/class-room.js";
import { Discipline } from "../entities/discipline.js";
import { DisciplineFactory } from "./discipline-factory.js";

type ClassRoomFactoryParams = {
  discipline: Discipline;
};

export class ClassRoomFactory {
  static make(classRoom?: ClassRoomFactoryParams): ClassRoom {
    const discipline = classRoom?.discipline ?? DisciplineFactory.make();
    const classRoomCreated = new ClassRoom(discipline);

    return classRoomCreated;
  }
}

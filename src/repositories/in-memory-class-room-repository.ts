import { ClassRoom } from "../entities/class-room.js";

export class InMemoryClassRoomRepository {
  private classRooms: ClassRoom[] = [];

  async save(classRoom: ClassRoom): Promise<void> {
    this.classRooms.push(classRoom);
  }

  async findAll(): Promise<ClassRoom[]> {
    return this.classRooms;
  }
}

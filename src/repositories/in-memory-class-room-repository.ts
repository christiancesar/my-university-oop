import { ClassRoom } from "../entities/class-room.js";

/**
 * Repositório de Salas de Aula em Memória
 */
export class InMemoryClassRoomRepository {
  private classRooms: ClassRoom[] = [];

  /**
   * Salva uma sala de aula no repositório.
   * @param classRoom - A sala de aula a ser salva.
   */
  async save(classRoom: ClassRoom): Promise<void> {
    this.classRooms.push(classRoom);
  }

  /**
   * Retorna todas as salas de aula no repositório.
   * @returns Uma lista de todas as salas de aula.
   */
  async findAll(): Promise<ClassRoom[]> {
    return this.classRooms;
  }
}

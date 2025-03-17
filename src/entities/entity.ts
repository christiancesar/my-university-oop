/**
 * Classe abstrata que representa uma entidade com um ID único.
 */
import { randomUUIDv7 as randomUUID } from "bun";

export abstract class Entity {
  private id: string;

  /**
   * Construtor da classe Entity.
   * @param Id - Id opcional da entidade.
   */
  constructor(id?: string) {
    this.id = id ?? randomUUID();
  }

  /**
   * Obtém o Id da entidade.
   * @returns O Id da entidade.
   */
  getId(): string {
    return this.id;
  }
}

/**
 * Classe abstrata que representa uma entidade com um ID único.
 */
import { randomUUID } from "crypto";

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

import { randomUUID } from "crypto";

export abstract class Entity {
  private id: string;

  constructor(id?: string) {
    this.id = id ?? randomUUID();
  }

  getId(): string {
    return this.id;
  }
}

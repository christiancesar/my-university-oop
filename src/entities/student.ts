import { Discipline } from "./discipline.js";
import { Entity } from "./entity.js";

export class Student extends Entity {
  private name: string;
  private email: string;
  private registration: string;
  constructor(name: string, id?: string) {
    super(id);
    this.name = name;
    this.email = this.createEmailInstitional(name);
    this.registration = this.createNumberRegistration();
  }

  private createNumberRegistration(): string {
    const year = new Date().getFullYear();
    const datenumber = new Date().getTime();
    return `${year}${datenumber}`;
  }

  private createEmailInstitional(name: string): string {
    const regex = /^(\w+).*?(\w+)$/;
    const match = name.match(regex);
    const firstName = match ? match[1] : "";
    const lastName = match ? match[2] : "";
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@aluno.ufr.edu.br`;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getRegistration(): string {
    return this.registration;
  }
}

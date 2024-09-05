import { Discipline } from "./discipline.js";
import { Entity } from "./entity.js";

export class Student extends Entity {
  private name: string;
  private email: string;
  private registration: string;
  private disciplines: Discipline[];
  constructor(name: string, disciplines?: Discipline[] | null, id?: string) {
    super(id);
    this.name = name;
    this.email = this.createEmailInstitional(name);
    this.disciplines = disciplines ?? [];
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

  public addDiscipline(discipline: Discipline): void {
    this.disciplines.push(discipline);
  }

  public removeDiscipline(disciplineId: string): void {
    const disciplineIndex = this.disciplines.findIndex(
      (discipline) => discipline.getId() !== disciplineId
    );
    this.disciplines.splice(disciplineIndex, 1);
  }

  public getDisciplines(): Discipline[] {
    return this.disciplines;
  }
}

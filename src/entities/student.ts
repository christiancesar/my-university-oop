import { Entity } from "./entity.js";
import { StudentDiscipline } from "./student-discipline.js";

export class Student extends Entity {
  name: string;
  email: string;
  registration: string;
  discipline: StudentDiscipline[];
  constructor(
    name: string,
    disciplines?: StudentDiscipline[] | null,
    id?: string
  ) {
    super(id);
    this.name = name;
    this.email = this.createEmailInstitional(name);
    this.discipline = disciplines ?? [];
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
}

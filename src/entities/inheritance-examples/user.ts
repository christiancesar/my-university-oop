import { Entity } from "../entity.js";

export abstract class User extends Entity {
  private name: string;
  private email: string;
  private registration: string;
  private userType: "student" | "teacher";
  constructor(name: string, userType: "student" | "teacher", id?: string) {
    super(id);
    this.name = name;
    this.userType = userType;
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
    const domain =
      this.userType === "teacher" ? "ufr.edu.br" : "aluno.ufr.edu.br";
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
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

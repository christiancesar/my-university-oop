/**
 * Classe que representa um professor.
 */
import { Person } from "./person.js";

export class Teacher extends Person {
  /**
   * Construtor da classe Teacher.
   * @param name - Nome do professor.
   * @param age - Idade do professor.
   * @param cpf - CPF do professor.
   * @param birthday - Data de nascimento do professor.
   * @param Id - Id opcional do professor.
   */
  constructor(name: string, cpf: string, birthday: Date, id?: string) {
    super(name, cpf, birthday, id);
    this.name = name;
    this.email = "";
  }
}

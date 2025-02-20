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
    this.email = this.createEmailInstitional();
  }

  /**
   * Cria o email institucional do professor.
   * @returns O email institucional.
   */
  public createEmailInstitional(): string {
    const names = this.getFirstAndLastName();

    if (names) {
      const { firstName, lastName } = names;
      return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@ufr.edu.br`;
    }

    return "";
  }

  /**
   * Obtém todas as informações do professor.
   * @returns Um objeto contendo todas as informações do professor.
   */
  public getAllInformation<T>(): T {
    return Object.assign(this, {
      name: this.name,
      cpf: this.cpf,
      email: this.email,
      registration: this.registration,
      age: this.age,
      birthday: this.birthday,
      address: this.address,
    }) as T;
  }
}

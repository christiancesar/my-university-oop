/**
 * Classe que representa um estudante.
 */
import { Person } from "./person.js";

export class Student extends Person {
  /**
   * Construtor da classe Student.
   * @param name - Nome do estudante.
   * @param cpf - CPF do estudante.
   * @param birthday - Data de nascimento do estudante.
   * @param Id - Id opcional do estudante.
   */
  constructor(name: string, cpf: string, birthday: Date, id?: string) {
    super(name, cpf, birthday, id);
    this.name = name;
    this.email = this.createEmailInstitional();
  }

  /**
   * Cria o email institucional do estudante.
   * @returns O email institucional.
   */
  public createEmailInstitional(): string {
    const names = this.getFirstAndLastName();

    if (names) {
      const { firstName, lastName } = names;
      return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@aluno.ufr.edu.br`;
    }

    return "";
  }

  /**
   * Obtém todas as informações do estudante.
   * @returns Um objeto contendo todas as informações do estudante.
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

/**
 * Classe abstrata que representa uma pessoa.
 */
import { Address } from "./address.js";
import { Entity } from "./entity.js";

interface RegistrationBase {
  createNumberRegistration(): string;
  createEmailInstitional(): string;
}

type GetFirstAndLastName = {
  firstName: string;
  lastName: string;
};

export abstract class Person extends Entity implements RegistrationBase {
  protected name: string;
  protected cpf: string;
  protected email: string;
  protected registration: string;
  protected age: number;
  protected birthday: Date;
  protected address: Address | null;

  /**
   * Construtor da classe Person.
   * @param name - Nome da pessoa.
   * @param cpf - CPF da pessoa.
   * @param birthday - Data de nascimento da pessoa.
   * @param Id - Id opcional da pessoa.
   */
  constructor(name: string, cpf: string, birthday: Date, id?: string) {
    super(id);
    this.cpf = cpf;
    this.email = "";
    this.name = name;
    this.age = new Date().getFullYear() - birthday.getFullYear();
    this.birthday = birthday;
    this.address = null;
    this.registration = this.createNumberRegistration();
  }

  /**
   * Obtém o nome da pessoa.
   * @returns O nome da pessoa.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Obtém o email da pessoa.
   * @returns O email da pessoa.
   */
  public getEmail(): string {
    return this.email;
  }

  /**
   * Obtém o CPF da pessoa.
   * @returns O CPF da pessoa.
   */
  public getCpf(): string {
    return this.cpf;
  }

  /**
   * Obtém a idade da pessoa.
   * @returns A idade da pessoa.
   */
  public getAge(): number {
    return this.age;
  }

  /**
   * Obtém o número de registro da pessoa.
   * @returns O número de registro.
   */
  public getRegistration(): string {
    return this.registration;
  }

  /**
   * Define o endereço da pessoa.
   * @param addresses - Endereço da pessoa.
   */
  public setAddresses(addresses: Address): void {
    this.address = addresses;
  }

  /**
   * Obtém a data de nascimento da pessoa.
   * @returns A data de nascimento.
   */
  public getBirthday(): Date {
    return this.birthday;
  }

  /**
   * Cria um número de registro único.
   * @returns O número de registro.
   */
  public createNumberRegistration(): string {
    const year = new Date().getFullYear();
    const datenumber = new Date().getTime();
    return `${year}${datenumber}`;
  }

  /**
   * Obtém o primeiro e último nome da pessoa.
   * @returns Um objeto contendo o primeiro e último nome, ou null se não encontrado.
   */
  protected getFirstAndLastName(): GetFirstAndLastName | null {
    try {
      const regex = /^(?<firstName>[\wÀ-ÿ]+).*?(?<lastName>[\wÀ-ÿ]+)$/;
      const match = this.name.match(regex);
      const firstName = match?.groups?.firstName;
      const lastName = match?.groups?.lastName;

      if (!firstName || !lastName) {
        throw new Error("First name or last name not found");
      }

      return { firstName, lastName };
    } catch (error: any) {
      // throw new Error("Error in getFirstAndLastName");
      console.error(error.message);

      return null;
    }
  }

  /**
   * Método abstrato para obter todas as informações da pessoa.
   */
  public abstract getAllInformation<T>(): T;

  /**
   * Método abstrato para criar o email institucional da pessoa.
   */
  public abstract createEmailInstitional(): string;
}

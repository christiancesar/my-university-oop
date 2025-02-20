/**
 * Classe que representa um endereço.
 */
import { Entity } from "./entity.js";

export class Address extends Entity {
  street: string;
  number: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;

  /**
   * Construtor da classe Address.
   * @param street - Rua
   * @param number - Número
   * @param city - Cidade
   * @param state - Estado
   * @param country - País
   * @param zipCode - Código Postal
   * @param id - Identificador opcional
   */
  constructor(
    street: string,
    number: string,
    city: string,
    state: string,
    country: string,
    zipCode: string,
    id?: string
  ) {
    super(id);
    this.street = street;
    this.number = number;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zipCode = zipCode;
  }
}

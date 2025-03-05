/**
 * Classe que representa um endereço.
 */
import { Entity } from "./entity.js";

export class Address extends Entity {
  street: string;
  neighborhood: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;

  /**
   * Construtor da classe Address.
   * @param street - Rua
   * @param neighborhood - Bairro
   * @param number - Número
   * @param city - Cidade
   * @param state - Estado
   * @param country - País
   * @param zipCode - Código Postal
   * @param complement - Complemento opcional
   * @param id - Identificador opcional
   */
  constructor(
    street: string,
    neighborhood: string,
    number: string,
    city: string,
    state: string,
    country: string,
    zipCode: string,
    complement?: string,
    id?: string
  ) {
    super(id);
    this.street = street;
    this.neighborhood = neighborhood;
    this.complement = complement;
    this.number = number;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zipCode = zipCode;
  }
}

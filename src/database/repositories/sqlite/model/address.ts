export class Address {
  id: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  created_at: Date;
  updated_at: Date | null;

  constructor({
    id,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    country,
    zipcode,
    created_at,
    updated_at,
  }: Address) {
    this.id = id;
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zipcode = zipcode;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

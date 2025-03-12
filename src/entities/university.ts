import { Address } from "./address.js";
import { Entity } from "./entity.js";

type UniversityConstructorProps = {
  id?: string;
  name: string;
  address?: Address | null;
};
export class University extends Entity {
  name: string;
  address?: Address | null;

  constructor({ name, address, id }: UniversityConstructorProps) {
    super(id);
    this.name = name;
    this.address = address;
  }
}

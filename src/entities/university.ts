import { Address } from "./address.js";
import { Discipline } from "./discipline.js";
import { Entity } from "./entity.js";

type UniversityConstructorProps = {
  id?: string;
  name: string;
  address?: Address | null;
  disciplines?: Discipline[] | null;
  createdAt?: Date;
  updatedAt?: Date | null;
};
export class University extends Entity {
  name: string;
  address?: Address | null;
  disciplines?: Discipline[] | null;
  createdAt: Date;
  updatedAt?: Date | null;

  constructor({
    name,
    address,
    disciplines,
    createdAt,
    updatedAt,
    id,
  }: UniversityConstructorProps) {
    super(id);
    this.name = name;
    this.address = address;
    this.disciplines = disciplines;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || null;
  }
}

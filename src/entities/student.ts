import { Entity } from "./entity.js";

export class User extends Entity {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string, id?: string) {
    super(id);
    this.name = name;
    this.email = email;
    this.password = password;
  }

}

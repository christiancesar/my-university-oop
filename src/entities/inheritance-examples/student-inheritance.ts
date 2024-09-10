import { User } from "./user.js";

export class Student extends User {
  constructor(name: string, id?: string) {
    super(name, "student", id);
  }
}

import { User } from "./user.js";

export class Teacher extends User {
  constructor(name: string, id?: string) {
    super(name, "teacher", id);
  }
}

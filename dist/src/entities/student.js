import { Entity } from "./entity.js";
export class User extends Entity {
    name;
    email;
    password;
    constructor(name, email, password, id) {
        super(id);
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

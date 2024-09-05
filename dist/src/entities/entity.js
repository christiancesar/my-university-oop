import { randomUUID } from "crypto";
export class Entity {
    id;
    constructor(id) {
        this.id = id ?? randomUUID();
    }
    getId() {
        return this.id;
    }
}

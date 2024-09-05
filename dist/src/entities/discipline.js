import { Entity } from "./entity.js";
export class Discipline extends Entity {
    name;
    period;
    workload;
    shortId;
    isRequired;
    prerequisites;
    constructor(shortId, name, workload, period, prerequisites, isRequired, id) {
        super(id);
        this.shortId = shortId;
        this.name = name;
        this.workload = workload;
        this.period = period;
        this.isRequired = isRequired ?? false;
        this.prerequisites = prerequisites;
    }
}

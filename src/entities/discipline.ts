import { Entity } from "./entity.js";
import { Workload } from "./workload.js";

export class Discipline extends Entity {
  name: string;
  workload: Workload;
  isRequired: boolean;
  prerequisites?: Discipline | null;
  constructor(
    name: string,
    workload: Workload,
    prerequisites?: Discipline | null,
    isRequired?: boolean,
    id?: string
  ) {
    super(id);
    this.name = name;
    this.workload = workload;
    this.isRequired = isRequired ?? false;
    this.prerequisites = prerequisites;
  }
}

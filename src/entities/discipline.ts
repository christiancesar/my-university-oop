import { Entity } from "./entity.js";
import { Workload } from "./workload.js";

export class Discipline extends Entity {
  name: string;
  period?: number | null;
  workload: Workload;
  shortId: number;
  isRequired: boolean;
  prerequisites?: Discipline | null;
  constructor(
    shortId: number,
    name: string,
    workload: Workload,
    period?: number | null,
    prerequisites?: Discipline | null,
    isRequired?: boolean,
    id?: string
  ) {
    super(id);
    this.shortId = shortId;
    this.name = name;
    this.workload = workload;
    this.period = period;
    this.isRequired = isRequired ?? false;
    this.prerequisites = prerequisites;
  }
}

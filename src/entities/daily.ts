import { Entity } from "./entity.js";
import { Workload } from "./workload.js";

export class Daily extends Entity {
  description: string;
  classRoomWorkload: Workload;
  private createdAt: Date;

  constructor(description: string, classRoomWorkload: Workload, id?: string) {
    super(id);
    this.description = description;
    this.classRoomWorkload = classRoomWorkload;
    this.createdAt = new Date();
  }
}

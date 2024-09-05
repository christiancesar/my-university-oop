import { Discipline } from "../entities/discipline.js";

export class InMemoryDisciplinesRepository {
  private disciplines: Discipline[] = [];

  save(discipline: Discipline): void {
    this.disciplines.push(discipline);
  }

  findById(id: string): Discipline | undefined {
    return this.disciplines.find((discipline) => discipline.getId() === id);
  }

  findAll(): Discipline[] {
    return this.disciplines;
  }

  findByShortId(shortId: number): Discipline | undefined {
    return this.disciplines.find(
      (discipline) => discipline.shortId === shortId
    );
  }

  findByName(name: string): Discipline | undefined {
    return this.disciplines.find((discipline) => discipline.name === name);
  }
}

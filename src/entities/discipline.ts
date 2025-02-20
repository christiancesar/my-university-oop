/**
 * Classe que representa uma disciplina.
 */
import { Entity } from "./entity.js";
import { Workload } from "./workload.js";

export class Discipline extends Entity {
  name: string;
  period?: number | null;
  workload: Workload;
  shortId: number;
  isRequired: boolean;
  prerequisites?: Discipline | null;

  /**
   * Construtor da classe Discipline.
   * @param shortId - ID curto da disciplina.
   * @param name - Nome da disciplina.
   * @param workload - Carga horária da disciplina.
   * @param period - Período da disciplina.
   * @param prerequisites - Pré-requisitos da disciplina.
   * @param isRequired - Indica se a disciplina é obrigatória.
   * @param Id - Id opcional da disciplina.
   */
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

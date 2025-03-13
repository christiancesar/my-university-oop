/**
 * Classe que representa uma disciplina.
 */
import { Entity } from "./entity.js";
import { Workload } from "./workload.js";

type DisciplineConstructorProps = {
  id?: string;
  name: string;
  period?: number | null;
  workload: Workload;
  shortId: string;
  isRequired: boolean;
  prerequisiteId?: string | null;
};

export class Discipline extends Entity {
  name: string;
  period?: number | null;
  workload: Workload;
  shortId: string;
  isRequired: boolean;
  prerequisiteId?: string | null;

  /**
   * Construtor da classe Discipline.
   * @param shortId - ID curto da disciplina.
   * @param name - Nome da disciplina.
   * @param workload - Carga horária da disciplina.
   * @param period - Período da disciplina.
   * @param prerequisiteId - Pré-requisitos da disciplina.
   * @param isRequired - Indica se a disciplina é obrigatória.
   * @param Id - Id opcional da disciplina.
   */
  constructor({
    shortId,
    name,
    workload,
    period,
    prerequisiteId,
    isRequired,
    id,
  }: DisciplineConstructorProps) {
    super(id);
    this.shortId = shortId;
    this.name = name;
    this.workload = workload;
    this.period = period;
    this.isRequired = isRequired ?? false;
    this.prerequisiteId = prerequisiteId;
  }
}

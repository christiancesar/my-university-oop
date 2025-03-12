import { Discipline } from "../discipline.js";
import { Workload } from "../workload.js";

type DiciplineFactoryParams = {
  id?: string;
  name?: string;
  shortId?: number;
  isRequired?: boolean;
  workload?: {
    pratical: number;
    theorical: number;
  };
  period?: number;
  prerequisites?: Discipline | null;
};

/**
 * Fábrica para criar instâncias de Discipline.
 */
export class DisciplineFactory {
  /**
   * Cria uma nova instância de Discipline.
   * @param discipline Parâmetros opcionais para criar a Discipline.
   * @returns Uma nova instância de Discipline.
   */
  static make(discipline?: DiciplineFactoryParams): Discipline {
    const shortId = discipline?.shortId ?? 0;
    const name = discipline?.name ?? "nome-padrão";
    const workload = discipline?.workload ?? { pratical: 32, theorical: 32 };
    const period = discipline?.period ?? 0;
    const prerequisites = discipline?.prerequisites ?? null;
    const isRequired = discipline?.isRequired ?? false;

    return new Discipline(
      shortId,
      name,
      new Workload(workload.pratical, workload.theorical),
      period,
      prerequisites,
      isRequired
    );
  }
}

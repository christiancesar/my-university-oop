import { Discipline } from "../entities/discipline.js";
import { Workload } from "../entities/workload.js";
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

export class DisciplinesFactory {
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

export type CreateDiscipline = {
  short_id: string;
  name: string;
  period: string;
  pre_requisite_id: string | null;
  workload_pratical: number;
  workload_theoretical: number;
};

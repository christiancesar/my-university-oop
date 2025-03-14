export type CreateDiscipline = {
  short_id: string;
  name: string;
  period: number;
  is_required: boolean;
  pre_requisite_id: string | null;
  workload_practical: number;
  workload_theoretical: number;
  university_id: string | null;
};

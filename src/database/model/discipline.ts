export class Discipline {
  id: string;
  short_id: string;
  name: string;
  period: number;
  is_required: boolean;
  pre_requisite_id: string | null;
  workload_practical: number;
  workload_theoretical: number;
  university_id: string | null;
  created_at: Date;
  updated_at: Date | null;

  constructor({
    id,
    name,
    short_id,
    period,
    pre_requisite_id,
    workload_practical,
    workload_theoretical,
    university_id,
    is_required,
    created_at,
    updated_at,
  }: Discipline) {
    this.id = id;
    this.name = name;
    this.short_id = short_id;
    this.is_required = is_required;
    this.period = period;
    this.pre_requisite_id = pre_requisite_id;
    this.university_id = university_id;
    this.workload_practical = workload_practical;
    this.workload_theoretical = workload_theoretical;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export class Discipline {
  id: string;
  short_id: string;
  name: string;
  period: string;
  pre_requisite_id: string | null;
  workload_pratical: number;
  workload_theoretical: number;
  created_at: Date;
  updated_at: Date | null;

  constructor({
    id,
    name,
    short_id,
    period,
    pre_requisite_id,
    workload_pratical,
    workload_theoretical,
    created_at,
    updated_at,
  }: Discipline) {
    this.id = id;
    this.name = name;
    this.short_id = short_id;
    this.period = period;
    this.created_at = created_at;
    this.pre_requisite_id = pre_requisite_id;
    this.updated_at = updated_at;
    this.workload_pratical = workload_pratical;
    this.workload_theoretical = workload_theoretical;
  }
}

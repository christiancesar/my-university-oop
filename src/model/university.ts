export class University {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date | null;

  constructor(
    id: string,
    name: string,
    address_id: string | null,
    created_at: Date,
    updated_at: Date | null
  ) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

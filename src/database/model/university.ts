export class University {
  id: string;
  name: string;
  address_id: string | null;
  created_at: Date;
  updated_at: Date | null;

  constructor({ id, name, address_id, created_at, updated_at }: University) {
    this.id = id;
    this.name = name;
    this.address_id = address_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

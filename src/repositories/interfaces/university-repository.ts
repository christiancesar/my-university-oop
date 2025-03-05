import { University } from "../../model/university.js";

type CreateUniversity = {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
};

export interface IUniversityRepository {
  createUniversity(data: CreateUniversity): University;
}

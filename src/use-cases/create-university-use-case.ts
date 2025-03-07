import { University } from "../model/university.js";
import { CreateUniversity } from "../database/repositories/dtos/create-university-dto.js";
import { IUniversitiesRepository } from "../database/repositories/interfaces/universities-repository.js";

export class CreateUniversityUseCase {
  constructor(private universitiesRepository: IUniversitiesRepository) {
    this.universitiesRepository = universitiesRepository;
  }

  async execute({ name, addressId }: CreateUniversity): Promise<University> {
    const university = await this.universitiesRepository.createUniversity({
      name,
      addressId,
    });

    return university;
  }
}

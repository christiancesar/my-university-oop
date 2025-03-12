import { FindUniversityById } from "../database/repositories/dtos/find-university-by-id-dto.js";
import { IUniversitiesRepository } from "../database/repositories/interfaces/universities-repository.js";
import { AppError } from "../shared/errors/AppError.js";
import { University as UniversityEntity } from "../entities/university.js";

export class FindUniversityUseCase {
  constructor(private universitiesRepository: IUniversitiesRepository) {
    this.universitiesRepository = universitiesRepository;
  }

  async execute({
    universityId,
  }: FindUniversityById): Promise<UniversityEntity> {
    const university = await this.universitiesRepository.findUniversityById({
      universityId,
    });

    if (!university) {
      throw new AppError("University not found.");
    }

    return university;
  }
}

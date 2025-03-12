import { FindUniversityById } from "../database/repositories/dtos/find-university-by-id-dto.js";
import { IUniversitiesRepository } from "../database/repositories/interfaces/universities-repository.js";
import { AppError } from "../shared/errors/AppError.js";
import { University } from "../database/repositories/sqlite/model/university.js";

export class DeleteUniversityByIdUseCase {
  constructor(private universitiesRepository: IUniversitiesRepository) {
    this.universitiesRepository = universitiesRepository;
  }

  async execute({ universityId }: FindUniversityById): Promise<void> {
    const university = await this.universitiesRepository.findUniversityById({
      universityId,
    });

    if (!university) {
      throw new AppError("University not found.");
    }

    await this.universitiesRepository.deleteUniversityById({
      universityId,
    });
  }
}

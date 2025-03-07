import { FindUniversityById } from "../database/repositories/dtos/find-university-by-id-dto.js";
import { IUniversitiesRepository } from "../database/repositories/interfaces/universities-repository.js";
import { AppError } from "../errors/AppError.js";
import { University } from "../model/university.js";

export class FindUniversityUseCase {
  constructor(private universitiesRepository: IUniversitiesRepository) {
    this.universitiesRepository = universitiesRepository;
  }

  async execute({ universityId }: FindUniversityById): Promise<University> {
    const university = await this.universitiesRepository.findUniversityById({
      universityId,
    });

    if (!university) {
      throw new AppError("University not found.");
    }

    return university;
  }
}

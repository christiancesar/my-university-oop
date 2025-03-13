import { IDisciplinesRepository } from "@src/database/repositories/interfaces/disciplines-repository.js";
import { IUniversitiesRepository } from "@src/database/repositories/interfaces/universities-repository.js";
import { Discipline } from "@src/entities/discipline.js";
import { AppError } from "@src/shared/errors/AppError.js";

export class FindDisciplinesByUniversityIdUseCase {
  constructor(
    private universitiesRepository: IUniversitiesRepository,
    private disciplinesRepository: IDisciplinesRepository
  ) {
    this.universitiesRepository = universitiesRepository;
    this.disciplinesRepository = disciplinesRepository;
  }

  async execute({
    universityId,
  }: {
    universityId: string;
  }): Promise<Discipline[]> {
    const university = await this.universitiesRepository.findUniversityById({
      universityId,
    });

    if (!university) {
      throw new AppError("University not found.");
    }

    const disciplines =
      await this.disciplinesRepository.findDisciplinesByUniversityId({
        universityId,
      });

    return disciplines;
  }
}

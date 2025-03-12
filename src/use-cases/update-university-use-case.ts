import { IUniversitiesRepository } from "../database/repositories/interfaces/universities-repository.js";
import { University as UniversityEntity } from "../entities/university.js";
import { AppError } from "../errors/AppError.js";

type UpdateUniversity = {
  universityId: string;
  addressId: string;
};

export class UpdateUniversityUseCase {
  constructor(private universitiesRepository: IUniversitiesRepository) {
    this.universitiesRepository = universitiesRepository;
  }
  async execute(data: UpdateUniversity): Promise<UniversityEntity> {
    const university = await this.universitiesRepository.findUniversityById({
      universityId: data.universityId,
    });

    if (!university) {
      throw new AppError("University not found");
    }

    const universityUpdated =
      await this.universitiesRepository.updateUniversityAddressByUniversityId({
        universityId: data.universityId,
        addressId: data.addressId,
      });

    return universityUpdated;
  }
}

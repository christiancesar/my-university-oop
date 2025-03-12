import { University } from "../entities/university.js";
import { CreateUniversity } from "../database/repositories/dtos/create-university-dto.js";
import { IUniversitiesRepository } from "../database/repositories/interfaces/universities-repository.js";
import { IAddressesRepository } from "../database/repositories/interfaces/addresses-repository.js";
import { AppError } from "../errors/AppError.js";

export class CreateUniversityUseCase {
  constructor(
    private universitiesRepository: IUniversitiesRepository,
    private addressesRepository: IAddressesRepository
  ) {
    this.universitiesRepository = universitiesRepository;
    this.addressesRepository = addressesRepository;
  }

  async execute({ name, addressId }: CreateUniversity): Promise<University> {
    if (addressId) {
      const addressExists = await this.addressesRepository.findAddressById({
        addressId,
      });

      if (!addressExists) {
        throw new AppError("Address not found");
      }
    }
    const universityExists =
      await this.universitiesRepository.findUniversityByName({
        name,
      });

    if (universityExists) {
      return universityExists;
    }

    const university = await this.universitiesRepository.createUniversity({
      name,
      addressId,
    });

    return university;
  }
}

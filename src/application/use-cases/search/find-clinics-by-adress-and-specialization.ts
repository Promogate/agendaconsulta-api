import { FindClinicsByAddressAndSpecialization as Repository } from "../../../domain/repositories/clinic-repository";
import { FindClinicsByAddressAndSpecialization } from "../../../domain/features/search/find-clinics-by-adress-and-specialization";

export class FindClinicsByAddressAndSpecializationUseCase implements FindClinicsByAddressAndSpecialization {
  constructor(private readonly clinicRepository: Repository) {}

  async execute(input: FindClinicsByAddressAndSpecialization.Input): Promise<FindClinicsByAddressAndSpecialization.Output> {
    if (!input.address || !input.specialization) {
      throw new Error("Address and specialization are required.");
    }

    return this.clinicRepository.findClinicsByAddressAndSpecialization(
      input.address,
      input.specialization
    );
  }
}

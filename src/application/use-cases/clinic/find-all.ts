import { FindAllClinics } from "../../../domain/features/clinic/find-all";
import { ClinicRepository } from "../../../domain/repositories/clinic-repository";
import logger from "../../../lib/logger";

export default class FindAllClinicsUseCase implements FindAllClinics {
  constructor(private clinicRepository: ClinicRepository) { }

  async execute(): Promise<FindAllClinics.Output> {
    try {
      return this.clinicRepository.findAll();
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

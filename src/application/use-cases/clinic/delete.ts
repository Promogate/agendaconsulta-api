import { DeleteClinc } from "../../../domain/features/clinic/delete";
import { ClinicRepository } from "../../../domain/repositories/clinic-repository";
import logger from "../../../lib/logger";

export default class DeleteClinicUseCase implements DeleteClinc {
  constructor(private clinicRepository: ClinicRepository) { }

  async execute(id: string): Promise<void> {
    try {
      return this.clinicRepository.delete(id);
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

import { UpdateClinic } from "../../../domain/features/clinic/update";
import { ClinicRepository } from "../../../domain/repositories/clinic-repository";
import logger from "../../../lib/logger";

export default class UpdateClinicUseCase implements UpdateClinic {
  constructor(private clinicRepository: ClinicRepository) { }

  async execute(id: string, input: UpdateClinic.Input): Promise<UpdateClinic.Output> {
    try {
      return this.clinicRepository.update(id, input);
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

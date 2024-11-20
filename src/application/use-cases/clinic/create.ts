import { CreateClinic } from "../../../domain/features/clinic/create";
import { ClinicRepository } from "../../../domain/repositories/clinic-repository";
import logger from "../../../lib/logger";

export default class CreateClinicUseCase implements CreateClinic {
  constructor(private clinicRepository: ClinicRepository) { }
  async execute(input: CreateClinic.Input): Promise<CreateClinic.Output> {
    try {
      return this.clinicRepository.create(input);
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

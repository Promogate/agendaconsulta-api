import { FindById } from "../../../domain/features/clinic/find-by-id";
import { ClinicRepository } from "../../../domain/repositories/clinic-repository";
import logger from "../../../lib/logger";

export default class FindClinicByIdUseCase implements FindById {
  constructor(private clinicRepository: ClinicRepository) {}

  async execute(input: FindById.Input): Promise<FindById.Output> {
    try {
      return this.clinicRepository.findById(input.id);
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

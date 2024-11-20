import { FindById } from "../../../domain/features/doctor/find-by-id";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";
import logger from "../../../lib/logger";

export default class FindDoctorByIdUseCase implements FindById {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute(input: FindById.Input): Promise<FindById.Output> {
    try {
      return this.doctorRepository.findById(input.id);
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

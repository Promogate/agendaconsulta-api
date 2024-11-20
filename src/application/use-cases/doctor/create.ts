import { CreateDoctor } from "../../../domain/features/doctor/create";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";
import logger from "../../../lib/logger";

export default class CreateDoctorUseCase implements CreateDoctor {
  constructor(private doctorRepository: DoctorRepository) { }
  async execute(input: CreateDoctor.Input): Promise<CreateDoctor.Output> {
    try {
      return this.doctorRepository.create(input);
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

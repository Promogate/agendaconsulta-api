import { DeleteDoctor } from "../../../domain/features/doctor/delete";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";
import logger from "../../../lib/logger";

export default class DeleteDoctorUseCase implements DeleteDoctor {
  constructor(private doctorRepository: DoctorRepository) { }

  async execute(id: string): Promise<void> {
    try {
      return this.doctorRepository.delete(id);
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

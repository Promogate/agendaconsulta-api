import { Doctor } from "../../../domain/entities/doctor";
import { FindAllDoctors } from "../../../domain/features/doctor/find-all";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";
import logger from "../../../lib/logger";

export default class FindAllDoctorsUseCase implements FindAllDoctors {
  constructor(private doctorRepository: DoctorRepository) { }

  async execute(): Promise<Omit<Doctor, "password_hash">[]> {
    try {
      return this.doctorRepository.findAll();
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

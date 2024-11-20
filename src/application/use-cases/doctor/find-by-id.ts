import { Doctor } from "../../../domain/entities/doctor";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";

export default class FindDoctorByIdUseCase {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute(id: string): Promise<Omit<Doctor, "password_hash"> | null> {
    return this.doctorRepository.findById(id);
  }
}

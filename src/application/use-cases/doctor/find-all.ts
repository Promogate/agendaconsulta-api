import { Doctor } from "../../../domain/entities/doctor";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";

export default class FindAllDoctorsUseCase {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute(): Promise<Omit<Doctor, "password_hash">[]> {
    return this.doctorRepository.findAll();
  }
}

import { Doctor } from "../../../domain/entities/doctor";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";

interface CreateDoctorDTO extends Omit<Doctor, "id"> {}

export default class CreateDoctorUseCase {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute(input: CreateDoctorDTO): Promise<Omit<Doctor, "password_hash">> {
    return this.doctorRepository.create(input);
  }
}

import { Doctor } from "../../../domain/entities/doctor";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";

interface UpdateDoctorDTO extends Partial<Omit<Doctor, "id">> {}

export default class UpdateDoctorUseCase {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute(id: string, input: UpdateDoctorDTO): Promise<Omit<Doctor, "password_hash"> | null> {
    return this.doctorRepository.update(id, input);
  }
}

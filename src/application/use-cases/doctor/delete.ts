import { DoctorRepository } from "../../../domain/repositories/doctor-repository";

export default class DeleteDoctorUseCase {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute(id: string): Promise<void> {
    return this.doctorRepository.delete(id);
  }
}

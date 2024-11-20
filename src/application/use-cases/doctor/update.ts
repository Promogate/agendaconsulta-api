import { UpdateDoctor } from "../../../domain/features/doctor/update";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";
import logger from "../../../lib/logger";


export default class UpdateDoctorUseCase implements UpdateDoctor {
  constructor(private doctorRepository: DoctorRepository) { }

  async execute(id: string, input: UpdateDoctor.Input): Promise<UpdateDoctor.Output> {
    try {
      return this.doctorRepository.update(id, input);
    } catch (error: any) {
      logger.error({ name: error.name }, error.message);
      throw new Error(error.message);
    }
  }
}

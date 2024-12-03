import { PrismaClient } from "@prisma/client";
import { CreateSpecialty } from "../../../domain/features/specialties/create";
import logger from "../../../lib/logger";

export default class CreateSpecialtyUseCase implements CreateSpecialty {
  constructor(readonly database: PrismaClient) {}
  
  async execute(input: CreateSpecialty.Input): Promise<CreateSpecialty.Output> {
    try {
      const specialization = await this.database.specialization.create({
        data: {
          specialization_name: input.name
        }
      });
      return {
        id: specialization.id,
        name: specialization.specialization_name
      }
    } catch (error: any) {
      logger.error(error.message);
      throw new Error(error.message);
    }
  }

}

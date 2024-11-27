import { UpdateAdministrator } from "../../../domain/features/administrator/update";
import { AdministratorRepository } from "../../../domain/repositories/administrator-repository";

export class UpdateAdministratorUseCase implements UpdateAdministrator {
  constructor(private readonly administratorRepository: AdministratorRepository) { };

  async execute(input: UpdateAdministrator.Input): Promise<UpdateAdministrator.Ouput> {
    const admin = await this.administratorRepository.findById(input.id);
    if (!admin) {
      throw new Error("Administrator not found.");
    }
    const updated = await this.administratorRepository.update(input.id, input.data);
    return {
      id: updated.id,
      name: updated.email,
      email: updated.email,
      adminLevel: updated.admin_level,
      createdAt: updated.created_at,
      updatedAt: updated.updated_at
    }
  }
}

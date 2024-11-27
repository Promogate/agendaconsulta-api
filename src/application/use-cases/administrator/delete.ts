import { DeleteAdministrator } from "../../../domain/features/administrator/delete";
import { AdministratorRepository } from "../../../domain/repositories/administrator-repository";

export class DeleteAdministratorUseCase implements DeleteAdministrator {
  constructor(private readonly administratorRepository: AdministratorRepository) {}
  
  async execute(input: DeleteAdministrator.Input): Promise<void> {
    const admin = await this.administratorRepository.findById(input.id);
    if (!admin) {
      throw new Error("Administrator not found.");
    }
    await this.administratorRepository.delete(input.id);
  }
}

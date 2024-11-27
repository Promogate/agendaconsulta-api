import { FindAdministratorById } from "../../../domain/features/administrator/find-by-id";
import { AdministratorRepository } from "../../../domain/repositories/administrator-repository";

export class FindAdministratorByIdUseCase implements FindAdministratorById {
  constructor(private readonly administratorRepository: AdministratorRepository) { }
  async execute(id: string): Promise<FindAdministratorById.Output> {
    const admin = await this.administratorRepository.findById(id);
    if (!admin) {
      throw new Error("Administrator not found.");
    }
    return {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      adminLevel: admin.admin_level,
      createdAt: admin.created_at,
      updatedAt: admin.updated_at
    };
  }

}

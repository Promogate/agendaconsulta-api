import { hash } from "bcrypt";
import { CreateAdministrator } from "../../../domain/features/administrator/create";
import { AdministratorRepository } from "../../../domain/repositories/administrator-repository";

export class CreateAdministratorUseCase implements CreateAdministrator {
  constructor(private readonly administratorRepository: AdministratorRepository) {}
  
  async execute(input: CreateAdministrator.Input): Promise<CreateAdministrator.Ouput> {
    const isAdminAlreadyRegistered = await this.administratorRepository.findByEmail(input.email);
    if (isAdminAlreadyRegistered) {
      throw new Error("Administrator with this email already exists.");
    }
    const passwordHash = await hash(input.password, 10);
    const admin = await this.administratorRepository.create({
      name: input.name,
      email: input.email,
      password_hash: passwordHash,
      admin_level: input.adminLevel
    })
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

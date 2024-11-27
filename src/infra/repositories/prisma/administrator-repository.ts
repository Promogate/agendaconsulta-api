import { PrismaClient } from "@prisma/client";
import { AdministratorRepository, CreateAdministrator, CreateAdministratorDTO, FindByEmailAdministrator, FindByIdAdministrator, UpdateAdministrator, UpdateAdministratorDTO } from "../../../domain/repositories/administrator-repository";
import { AdministratorLevel } from "../../../domain/entities/administrator";

export class PrismaAdministratorRepository implements AdministratorRepository {
  constructor(private readonly prisma: PrismaClient) { }

  async create(input: CreateAdministratorDTO): Promise<CreateAdministrator.Output> {
    const adminLevel = AdministratorLevel[input.admin_level as keyof typeof AdministratorLevel];
    if (!adminLevel) {
      const admin = await this.prisma.administrator.create({
        data: {
          email: input.email,
          name: input.name,
          password_hash: input.password_hash
        }
      });
      return {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        created_at: admin.created_at,
        updated_at: admin.updated_at,
        admin_level: admin.admin_level
      };
    }
    const admin = await this.prisma.administrator.create({
      data: {
        email: input.email,
        name: input.name,
        password_hash: input.password_hash,
        admin_level: adminLevel
      }
    });
    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      created_at: admin.created_at,
      updated_at: admin.updated_at,
      admin_level: admin.admin_level
    };
  }

  async findById(id: string): Promise<FindByIdAdministrator.Output> {
    const admin = await this.prisma.administrator.findUnique({ where: { id } });
    if (!admin) return null;
    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      created_at: admin.created_at,
      updated_at: admin.updated_at,
      admin_level: admin.admin_level
    };
  }

  async findByEmail(email: string): Promise<FindByEmailAdministrator.Output> {
    const admin = await this.prisma.administrator.findUnique({ where: { email } });
    if (!admin) return null;
    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      created_at: admin.created_at,
      updated_at: admin.updated_at,
      admin_level: admin.admin_level
    };
  }

  async update(id: string, data: UpdateAdministratorDTO): Promise<UpdateAdministrator.Output> {
    const adminLevel = AdministratorLevel[data.admin_level as keyof typeof AdministratorLevel];
    if (!adminLevel) {
      const admin = await this.prisma.administrator.update({
        where: { id },
        data: {
          email: data.email,
          name: data.name,
          password_hash: data.password_hash
        }
      });
      return {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        created_at: admin.created_at,
        updated_at: admin.updated_at,
        admin_level: admin.admin_level
      };
    }
    const admin = await this.prisma.administrator.update({
      where: { id },
      data: {
        admin_level: adminLevel,
        email: data.email,
        name: data.name,
        password_hash: data.password_hash
      }
    });
    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      created_at: admin.created_at,
      updated_at: admin.updated_at,
      admin_level: admin.admin_level
    };
  }

  async delete(id: string): Promise<void> {
    await this.prisma.administrator.delete({ where: { id } });
  }
}

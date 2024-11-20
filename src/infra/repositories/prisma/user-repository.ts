// infrastructure/PrismaUserRepository.ts
import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../../domain/repositories/user-repository";
import { User } from "../../../domain/entities/user";

export class PrismaUserRepository implements UserRepository {
  constructor(readonly prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create(input: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<Omit<User, "passwordHash">> {
    const user = await this.prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        password_hash: input.passwordHash,
        phone: input.phone,
        is_phone_whatsapp: input.isPhoneWhatsapp,
        address: input.address
      }
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      isPhoneWhatsapp: user.is_phone_whatsapp,
      address: user.address || "",
      createdAt: user.created_at,
      updatedAt: user.updated_at
    };
  }

  async findById(id: string): Promise<Omit<User, "passwordHash"> | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) return null;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      isPhoneWhatsapp: user.is_phone_whatsapp,
      address: user.address || "",
      createdAt: user.created_at,
      updatedAt: user.updated_at
    };
  }

  async findAll(): Promise<Omit<User, "passwordHash">[]> {
    const users = await this.prisma.user.findMany({
      select: {
        address: true,
        created_at: true,
        email: true,
        id: true,
        is_phone_whatsapp: true,
        name: true,
        phone: true,
        updated_at: true,
      }
    });

    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address || "",
      phone: user.phone || "",
      isPhoneWhatsapp: user.is_phone_whatsapp,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    }));
  }

  async update(id: string, input: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>): Promise<Omit<User, "passwordHash"> | null> {
    const user = await this.prisma.user.update({ where: { id }, data: input });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      isPhoneWhatsapp: user.is_phone_whatsapp,
      address: user.address || "",
      createdAt: user.created_at,
      updatedAt: user.updated_at
    };
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.prisma.user.delete({ where: { id } });
    return !!deleted;
  }
}

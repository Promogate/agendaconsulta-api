import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRepository, FindAdministratorByEmail } from "../../../domain/repositories/auth-repository";
import { PrismaClient } from "@prisma/client";
import { User } from "../../../domain/entities/user";

export default class PrismaAuthRepository implements AuthRepository {
  constructor(private readonly prisma: PrismaClient) {}
  
  async findAdministratorByEmail(email: string): Promise<FindAdministratorByEmail.Output> {
    const administrator = await this.prisma.administrator.findUnique({ where: { email }});
    if (!administrator) return null;
    return {
      id: administrator.id,
      name: administrator.name,
      email: administrator.email,
      created_at: administrator.created_at,
      updated_at: administrator.updated_at,
      admin_level: administrator.admin_level
    }
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return null;
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone || undefined,
      isPhoneWhatsapp: user.is_phone_whatsapp,
      address: user.address || undefined,
      passwordHash: user.password_hash,
      createdAt: user.created_at,
      updatedAt: user.updated_at
    }
  }

  async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  generateToken(userId: string): string {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in the environment variables.");
    }

    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
  }
}

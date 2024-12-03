import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";

import { AuthenticateAdmin } from "../../../domain/features/administrator/authenticate";
import logger from "../../../lib/logger";

export default class AuthenticateAdminUseCase implements AuthenticateAdmin {
  constructor(readonly database: PrismaClient) { }

  async execute(input: AuthenticateAdmin.Input): Promise<AuthenticateAdmin.Output> {
    try {
      const administrator = await this.database.administrator.findUnique({ where: { email: input.email } });
      if (!administrator) throw new Error("Email ou senha estão incorretos. Tente novamente");
      const isPasswordValid = compare(input.password, administrator.password_hash);
      if (!isPasswordValid) throw new Error("Email ou senha estão incorretos. Tente novamente");
      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in the environment variables.");
      }
      const token = jwt.sign({ id: administrator.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
      return { token };
    } catch (error: any) {
      logger.error(error.message);
      throw new Error(error.message);
    }
  }
}

import { AuthenticateUser } from "../../domain/features/auth/authenticate-user";
import { AuthRepository } from "../../domain/repositories/auth-repository";
import logger from "../../lib/logger";

export default class AuthenticateUserUseCase implements AuthenticateUser {
  constructor(private readonly authRepository: AuthRepository) { }

  async execute(input: AuthenticateUser.Input): Promise<AuthenticateUser.Output> {
    try {
      const user = await this.authRepository.findUserByEmail(input.email);
      if (!user) {
        throw new Error("Invalid email or password.");
      }
      const isPasswordValid = await this.authRepository.validatePassword(input.password, user.passwordHash);
      if (!isPasswordValid) {
        throw new Error("Invalid email or password.");
      }
      const token = this.authRepository.generateToken(user.id);
      return { token };
    } catch (error: any) {
      logger.error({
        name: error.name
      }, error.message);
      throw new Error(error.stack);
    }
  }
}

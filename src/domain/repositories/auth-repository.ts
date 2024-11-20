import { User } from "../entities/user";

export interface AuthRepository {
  findUserByEmail(email: string): Promise<User | null>;
  validatePassword(password: string, hashedPassword: string): Promise<boolean>;
  generateToken(userId: string): string;
}

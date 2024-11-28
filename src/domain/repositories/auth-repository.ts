import { Administrator } from "../entities/administrator";
import { User } from "../entities/user";

export interface AuthRepository {
  findUserByEmail(email: string): Promise<User | null>;
  findAdministratorByEmail(email: string): Promise<FindAdministratorByEmail.Output>;
  validatePassword(password: string, hashedPassword: string): Promise<boolean>;
  generateToken(userId: string): string;
}

export namespace FindAdministratorByEmail {
  export type Output = Omit<Administrator, "password_hash"> | null;
}

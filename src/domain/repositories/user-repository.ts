import { User } from "../entities/user";

export interface UserRepository {
  create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<Omit<User, "passwordHash">>;
  findById(id: string): Promise<Omit<User, "passwordHash"> | null>;
  findAll(): Promise<Omit<User, "passwordHash">[]>;
  update(id: string, user: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>): Promise<Omit<User, "passwordHash"> | null>;
  delete(id: string): Promise<boolean>;
}

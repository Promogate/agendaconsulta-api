import { User } from "../entities/user";

export interface UserRepository {
  create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  update(id: string, user: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}

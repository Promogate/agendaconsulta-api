import { User } from "../entities/user";

export interface IUserServices {
  createUser(input: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<Omit<User, "passwordHash">>;
  getUserById(id: string): Promise<Omit<User, "passwordHash"> | null>
  getAllUsers(): Promise<Omit<User, "passwordHash">[]>
  updateUser(id: string, input: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>): Promise<Omit<User, "passwordHash"> | null>
  deleteUser(id: string): Promise<boolean>
}

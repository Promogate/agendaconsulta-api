import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user-repository";
import { IUserServices } from "../../domain/services/user";

export default class UserServices implements IUserServices {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<Omit<User, "passwordHash">> {
    return this.userRepository.create(userData);
  }

  async getUserById(id: string): Promise<Omit<User, "passwordHash"> | null> {
    return this.userRepository.findById(id);
  }

  async getAllUsers(): Promise<Omit<User, "passwordHash">[]> {
    return this.userRepository.findAll();
  }

  async updateUser(id: string, userData: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>): Promise<Omit<User, "passwordHash"> | null> {
    return this.userRepository.update(id, userData);
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}

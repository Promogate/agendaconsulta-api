import { Administrator, AdministratorLevel } from "../entities/administrator";

export interface AdministratorRepository {
  create(input: CreateAdministratorDTO): Promise<SafeAdministrator>;
  findById(id: string): Promise<SafeAdministrator | null>;
  findByEmail(email: string): Promise<SafeAdministrator | null>;
  update(id: string, data: UpdateAdministratorDTO): Promise<SafeAdministrator | null>;
  delete(id: string): Promise<void>;
}

type SafeAdministrator = Omit<Administrator, "password_hash">;

export interface CreateAdministratorDTO {
  name: string;
  email: string;
  password_hash: string;
  admin_level?: AdministratorLevel;
}

export interface UpdateAdministratorDTO {
  name?: string;
  email?: string;
  password_hash?: string;
  admin_level?: AdministratorLevel;
}

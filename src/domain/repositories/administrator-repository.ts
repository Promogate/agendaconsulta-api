import { Administrator, AdministratorLevel, } from "../entities/administrator";

export interface AdministratorRepository {
  create(input: CreateAdministratorDTO): Promise<CreateAdministrator.Output>;
  findById(id: string): Promise<FindByIdAdministrator.Output>;
  findByEmail(email: string): Promise<FindByEmailAdministrator.Output>;
  update(id: string, data: UpdateAdministratorDTO): Promise<UpdateAdministrator.Output>;
  delete(id: string): Promise<void>;
}

export type SafeAdministrator = Omit<Administrator, "password_hash">;
export namespace CreateAdministrator {
  export type Output = {
    id: string;
    name: string;
    email: string;
    admin_level: string;
    created_at: Date;
    updated_at: Date;
  };
}

export namespace FindByIdAdministrator {
  export type Output = {
    id: string;
    name: string;
    email: string;
    admin_level: string;
    created_at: Date;
    updated_at: Date;
  } | null;
}

export namespace UpdateAdministrator {
  export type Output = {
    id: string;
    name: string;
    email: string;
    admin_level: string;
    created_at: Date;
    updated_at: Date;
  }
}

export namespace FindByEmailAdministrator {
  export type Output = {
    id: string;
    name: string;
    email: string;
    admin_level: string;
    created_at: Date;
    updated_at: Date;
  } | null;
}

export interface CreateAdministratorDTO {
  name: string;
  email: string;
  password_hash: string;
  admin_level?: keyof typeof AdministratorLevel;
}

export interface UpdateAdministratorDTO {
  name?: string;
  email?: string;
  password_hash?: string;
  admin_level?: string;
}

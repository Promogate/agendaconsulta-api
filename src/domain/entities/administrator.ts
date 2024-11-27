export interface Administrator {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  admin_level?: keyof typeof AdministratorLevel;
  created_at: Date;
  updated_at: Date;
}

export enum AdministratorLevel {
  admin = "ADMIN",
  manager = "MANAGER",
  employee = "EMPLOYEE",
}

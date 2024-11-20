import { Clinic } from "../entities/clinic";

export interface ClinicRepository {
  create(clinic: Omit<Clinic, "id" | "createdAt" | "updatedAt">): Promise<Clinic>;
  findById(id: string): Promise<Clinic | null>;
  findAll(): Promise<Clinic[]>;
  update(id: string, clinic: Partial<Omit<Clinic, "id" | "createdAt" | "updatedAt">>): Promise<Clinic>;
  delete(id: string): Promise<void>;
}

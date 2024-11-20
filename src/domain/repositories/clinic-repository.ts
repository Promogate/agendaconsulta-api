import { Clinic } from "../entities/clinic";

export interface ClinicRepository {
  create(clinic: Omit<Clinic, "id" | "created_at" | "updated_at">): Promise<Clinic>;
  findById(id: string): Promise<Clinic | null>;
  findAll(): Promise<Clinic[]>;
  update(id: string, clinic: Partial<Omit<Clinic, "id" | "created_at" | "updated_at">>): Promise<Clinic>;
  delete(id: string): Promise<void>;
}

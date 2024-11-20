import { Doctor } from "../entities/doctor";

export interface DoctorRepository {
  create(doctor: Omit<Doctor, "id">): Promise<Omit<Doctor, "password_hash">>;
  findById(id: string): Promise<Omit<Doctor, "password_hash"> | null>;
  findAll(): Promise<Omit<Doctor, "password_hash">[]>;
  update(id: string, doctor: Partial<Omit<Doctor, "id">>): Promise<Omit<Doctor, "password_hash"> | null>;
  delete(id: string): Promise<void>;
}

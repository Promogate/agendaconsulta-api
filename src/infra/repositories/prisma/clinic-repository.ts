import { PrismaClient } from "@prisma/client";
import { Clinic } from "../../../domain/entities/clinic";
import { ClinicRepository } from "../../../domain/repositories/clinic-repository";

export default class PrismaClinicRepository implements ClinicRepository {
  constructor(readonly prisma: PrismaClient) { }

  async create(input: Omit<Clinic, "id" | "created_at" | "updated_at">): Promise<Clinic> {
    const clinic = await this.prisma.clinic.create({ data: input });
    return {
      id: clinic.id,
      name: clinic.name,
      email: clinic.email,
      phone: clinic.phone,
      is_phone_whatsapp: clinic.is_phone_whatsapp,
      address: clinic.address,
      created_at: clinic.created_at,
      updated_at: clinic.updated_at
    }
  }

  async findById(id: string): Promise<Clinic | null> {
    const clinic = await this.prisma.clinic.findUnique({ where: { id } });
    return clinic;
  }

  async findAll(): Promise<Clinic[]> {
    const clinics = await this.prisma.clinic.findMany();
    return clinics;
  }

  async update(id: string, input: Partial<Omit<Clinic, "id" | "created_at" | "updated_at">>): Promise<Clinic> {
    const clinic = await this.prisma.clinic.update({
      where: { id },
      data: input
    });
    return clinic;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.clinic.delete({ where: { id } });
  }
}

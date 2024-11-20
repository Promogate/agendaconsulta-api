import { PrismaClient } from "@prisma/client";
import { DoctorRepository } from "../../../domain/repositories/doctor-repository";
import { Doctor } from "../../../domain/entities/doctor";

export class PrismaDoctorRepository implements DoctorRepository {
  constructor(readonly prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create(doctor: Omit<Doctor, "id">): Promise<Omit<Doctor, "password_hash">> {
    const createdDoctor = await this.prisma.doctor.create({
      data: {
        first_name: doctor.first_name,
        last_name: doctor.last_name,
        email: doctor.email,
        crm: doctor.crm,
        phone: doctor.phone,
        password_hash: doctor.password_hash,
        is_phone_whatsapp: doctor.is_phone_whatsapp,
        specialties: doctor.specialties,
      },
    });

    return {
      id: createdDoctor.id,
      first_name: createdDoctor.first_name,
      last_name: createdDoctor.last_name,
      email: createdDoctor.email,
      crm: createdDoctor.crm || undefined,
      phone: createdDoctor.phone || undefined,
      is_phone_whatsapp: createdDoctor.is_phone_whatsapp,
      specialties: createdDoctor.specialties,
    };
  }

  async findById(id: string): Promise<Omit<Doctor, "password_hash"> | null> {
    const doctor = await this.prisma.doctor.findUnique({ where: { id } });
    if(!doctor) return null;

    return {
      id: doctor.id,
      first_name: doctor.first_name,
      last_name: doctor.last_name,
      email: doctor.email,
      crm: doctor.crm || undefined,
      phone: doctor.phone || undefined,
      is_phone_whatsapp: doctor.is_phone_whatsapp,
      specialties: doctor.specialties,
    } ;
  }

  async findAll(): Promise<Omit<Doctor, "password_hash">[]> {
    const doctors = await this.prisma.doctor.findMany();

    return doctors.map((doctor) => {
      return {
        id: doctor.id,
        first_name: doctor.first_name,
        last_name: doctor.last_name,
        email: doctor.email,
        crm: doctor.crm || undefined,
        phone: doctor.phone || undefined,
        is_phone_whatsapp: doctor.is_phone_whatsapp,
        specialties: doctor.specialties,
      };
    })
  }

  async update(id: string, doctor: Partial<Omit<Doctor, "id">>): Promise<Omit<Doctor, "password_hash"> | null> {
    const result = await this.prisma.doctor.update({
      where: { id },
      data: doctor,
    });
    
    return {
      id: result.id,
      first_name: result.first_name,
      last_name: result.last_name,
      email: result.email,
      crm: result.crm || undefined,
      phone: result.phone || undefined,
      is_phone_whatsapp: result.is_phone_whatsapp,
      specialties: result.specialties,
    } ;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.doctor.delete({ where: { id } });
  }
}

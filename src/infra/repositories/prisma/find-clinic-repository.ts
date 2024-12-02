import { PrismaClient } from "@prisma/client";
import { FindClinicsByAddressAndSpecialization } from "../../../domain/repositories/clinic-repository";
import { Clinic } from "../../../domain/entities/clinic";

export class FindClinicsByAddressAndSpecializationRepository implements FindClinicsByAddressAndSpecialization {
  constructor(private readonly prisma: PrismaClient) {}

  async findClinicsByAddressAndSpecialization(
    address: string,
    specialization: string
  ): Promise<Clinic[]> {
    console.log("Endereço: ", address);
    console.log("Especialidade: ", specialization);
    return this.prisma.clinic.findMany({
      where: {
        address: {
          contains: address,
          mode: "insensitive",
        },
        specializations: {
          some: {
            specialization: {
              specialization_name: {
                contains: specialization,
                mode: "insensitive",
              },
            },
          },
        },
      },
      include: {
        specializations: {
          include: {
            specialization: true,
          },
        },
      },
    });
  }
}

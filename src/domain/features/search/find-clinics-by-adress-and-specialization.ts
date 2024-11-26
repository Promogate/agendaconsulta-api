import { Clinic } from "../../entities/clinic";

export interface FindClinicsByAddressAndSpecialization {
  execute(input: FindClinicsByAddressAndSpecialization.Input): Promise<FindClinicsByAddressAndSpecialization.Output>
}

export namespace FindClinicsByAddressAndSpecialization {
  export type Input = {
    address: string;
    specialization: string;
  }
  export type Output = Clinic[]
}

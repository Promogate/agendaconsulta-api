import { Clinic } from "../../entities/clinic";

export interface CreateClinic {
  execute(input: CreateClinic.Input): Promise<CreateClinic.Output>;
}

interface CreateClinicDTO extends Omit<Clinic, "id" | "created_at" | "updated_at"> { }

export namespace CreateClinic {
  export type Input = CreateClinicDTO;
  export type Output = Clinic;
}

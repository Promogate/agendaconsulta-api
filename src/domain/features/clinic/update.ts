import { Clinic } from "../../entities/clinic";

export interface UpdateClinic {
  execute(id: string, input: UpdateClinic.Input): Promise<UpdateClinic.Output>;
}

interface UpdateClinicDTO extends Omit<Clinic, "id" | "created_at" | "updated_at"> { }

export namespace UpdateClinic {
  export type Input = UpdateClinicDTO;
  export type Output = Clinic | null;
}

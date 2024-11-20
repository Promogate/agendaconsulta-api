import { Doctor } from "../../entities/doctor";

export interface UpdateDoctor {
  execute(id: string, input: UpdateDoctor.Input): Promise<UpdateDoctor.Output>;
}

interface UpdateDoctorDTO extends Omit<Doctor, "id" | "created_at" | "updated_at"> { }

export namespace UpdateDoctor {
  export type Input = UpdateDoctorDTO;
  export type Output = Omit<Doctor, "password_hash"> | null;
}

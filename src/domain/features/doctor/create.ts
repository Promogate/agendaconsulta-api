import { Doctor } from "../../entities/doctor";

export interface CreateDoctor {
  execute(input: CreateDoctor.Input): Promise<CreateDoctor.Output>;
}

interface CreateDoctorDTO extends Omit<Doctor, "id"> { }

export namespace CreateDoctor {
  export type Input = CreateDoctorDTO;
  export type Output = Omit<Doctor, "password_hash">;
}

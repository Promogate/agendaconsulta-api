import { Doctor } from "../../entities/doctor";

export interface FindAllDoctors {
  execute(): Promise<FindAllDoctors.Output>;
}

interface CreateDoctorDTO extends Omit<Doctor, "id"> { }

export namespace FindAllDoctors {
  export type Output = Omit<Doctor, "password_hash">[];
}

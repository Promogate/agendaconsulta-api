import { Clinic } from "../../entities/clinic";

export interface FindAllClinics {
  execute(): Promise<FindAllClinics.Output>;
}

export namespace FindAllClinics {
  export type Output = Clinic[];
}

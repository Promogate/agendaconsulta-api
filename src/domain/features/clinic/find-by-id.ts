import { Clinic } from "../../entities/clinic";

export interface FindById {
  execute(input: FindById.Input): Promise<FindById.Output>;
}

export namespace FindById {
  export type Input = { id: string; };
  export type Output = Clinic | null;
}

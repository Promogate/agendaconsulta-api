import { Doctor } from "../../entities/doctor";

export interface FindById {
  execute(input: FindById.Input): Promise<FindById.Output>;
}

export namespace FindById {
  export type Input = { id: string; };
  export type Output = Omit<Doctor, "password_hash"> | null;
}

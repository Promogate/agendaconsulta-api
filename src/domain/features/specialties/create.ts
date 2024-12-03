export interface CreateSpecialty {
  execute(input: CreateSpecialty.Input): Promise<CreateSpecialty.Output>;
}

export namespace CreateSpecialty {
  export type Input = { name: string; };
  export type Output = { id: string; name: string; };
}

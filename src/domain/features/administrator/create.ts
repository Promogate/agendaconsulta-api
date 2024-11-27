export interface CreateAdministrator {
  execute(input: CreateAdministrator.Input): Promise<CreateAdministrator.Ouput>;
}

export namespace CreateAdministrator {
  export type Input = {
    name: string;
    email: string;
    password: string;
    adminLevel?: string;
  };
  export type Ouput = {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    adminLevel: string;
  };
}

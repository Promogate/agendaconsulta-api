export interface UpdateAdministrator {
  execute(input: UpdateAdministrator.Input): Promise<UpdateAdministrator.Ouput>;
}

export namespace UpdateAdministrator {
  export type Input = {
    id: string;
    data: {
      name?: string;
      email?: string;
      password?: string;
      adminLevel?: string;
    };
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

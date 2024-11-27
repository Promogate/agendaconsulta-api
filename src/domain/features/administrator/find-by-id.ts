export interface FindAdministratorById {
  execute(id: string): Promise<FindAdministratorById.Output>;
}

export namespace FindAdministratorById {
  export type Output = {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    adminLevel: string;
  };
}

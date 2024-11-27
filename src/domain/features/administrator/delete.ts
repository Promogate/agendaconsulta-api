export interface DeleteAdministrator {
  execute(input: DeleteAdministrator.Input): Promise<void>;
}

export namespace DeleteAdministrator {
  export type Input = {
    id: string;
  }
}

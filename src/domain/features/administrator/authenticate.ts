export interface AuthenticateAdmin {
  execute(input: AuthenticateAdmin.Input): Promise<AuthenticateAdmin.Output>
}

export namespace AuthenticateAdmin {
  export type Input = {
    email: string;
    password: string;
  }
  export type Output = {
    token: string;
  }
}

export interface AuthenticateUser {
  execute(input: AuthenticateUser.Input): Promise<AuthenticateUser.Output>
}

export namespace AuthenticateUser {
  export type Input = {
    email: string;
    password: string;
  }
  export type Output = {
    token: string;
  }
}

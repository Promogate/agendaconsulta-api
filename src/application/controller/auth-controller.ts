import { HttpServer } from "../../infra/http/http-server";
import { Request, Response } from "express";
import { AuthenticateUser } from "../../domain/features/auth/authenticate-user";

export default class AuthController {
  private namespace = "/auth";

  constructor(
    readonly router: HttpServer,
    readonly authenticateUser: AuthenticateUser
  ) {
    this.router.on("post", this.namespace, "/sign-in", [], async (request: Request, response: Response) => {
      try {
        const body = request.body;
        const result = await this.authenticateUser.execute(body)
        response.status(200).json(result);
      } catch (error: any) {
        response.status(403).json({ message: error.message });
      }
    });
  }
}

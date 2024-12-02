import { Request, Response } from "express";
import { HttpServer } from "../../infra/http/http-server";
import logger from "../../lib/logger";
import { AuthenticateAdmin } from "../../domain/features/administrator/authenticate";

export default class AdministratorController {
  private namespace = "/administrator";

  constructor(
    readonly router: HttpServer,
    readonly authenticateAdmin: AuthenticateAdmin
  ) {
    this.router.on("post", this.namespace, "/login", [], async (request: Request, response: Response) => {
      try {
        const body = request.body as { email: string; password: string; };
        const { token } = await this.authenticateAdmin.execute({ email: body.email, password: body.password });
        response.status(200).json({ token });
      } catch (error: any) {
        logger.error(error.message);
        response.status(400).json({ message: error.message });
      }
    });
  }
}

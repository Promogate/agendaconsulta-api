import { Request, Response } from "express";
import { HttpServer } from "../../infra/http/http-server";
import { IUserServices } from "../../domain/services/user";

export default class UserController {
  private namespace = "/users";

  constructor(
    private readonly router: HttpServer,
    private readonly userService: IUserServices
  ) {
    this.router.on("get", this.namespace, "/getAll", [], async (request: Request, response: Response) => {
      return await this.userService.getAllUsers();
    });
  }
}

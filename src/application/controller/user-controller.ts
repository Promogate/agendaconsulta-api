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
      try {
        const users = await this.userService.getAllUsers();
        return response.status(200).json(users)
      } catch (error: any) {
        response.status(400).json({})
      }
    });
    this.router.on("post", this.namespace, "/create", [], async (request: Request, response: Response) => {
      try {
        const input = request.body;
        const users = await this.userService.createUser(input);
        return response.status(200).json(users)
      } catch (error: any) {
        response.status(400).json({})
      }
    });
    this.router.on("get", this.namespace, "/findById/:id", [], async (request: Request, response: Response) => {
      try {
        const input = request.params as { id: string; };
        const users = await this.userService.getUserById(input.id);
        return response.status(200).json(users)
      } catch (error: any) {
        response.status(400).json({})
      }
    });
    this.router.on("put", this.namespace, "/:id", [], async (request: Request, response: Response) => {
      try {
        const params = request.params as { id: string; };
        const input = request.body;
        const users = await this.userService.updateUser(params.id, input);
        return response.status(200).json(users)
      } catch (error: any) {
        response.status(400).json({})
      }
    });
    this.router.on("delete", this.namespace, "/:id", [], async (request: Request, response: Response) => {
      try {
        const params = request.params as { id: string; };
        const users = await this.userService.deleteUser(params.id);
        return response.status(200).json(users)
      } catch (error: any) {
        response.status(400).json({})
      }
    });
  }
}

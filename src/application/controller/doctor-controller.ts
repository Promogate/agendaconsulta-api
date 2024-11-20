import { Request, Response } from "express";
import { HttpServer } from "../../infra/http/http-server";
import { CreateDoctor } from "../../domain/features/doctor/create";

export default class DoctorController {
  private namespace = "/doctors";

  constructor(
    readonly router: HttpServer,
    readonly createDoctor: CreateDoctor
  ) {
    this.router.on("post", this.namespace, "/create", [], async (request: Request, response: Response) => {
      try {
        const result = await createDoctor.execute(request.body);
        response.status(201).json({ doctor: result });
      } catch (error: any) {
        response.status(400).json({ message: error.message });
      }
    });
  }
}

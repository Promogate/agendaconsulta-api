import { Request, Response } from "express";
import { HttpServer } from "../../infra/http/http-server";
import { CreateDoctor } from "../../domain/features/doctor/create";
import { FindAllDoctors } from "../../domain/features/doctor/find-all";
import { FindById } from "../../domain/features/doctor/find-by-id";

export default class DoctorController {
  private namespace = "/doctors";

  constructor(
    readonly router: HttpServer,
    readonly createDoctor: CreateDoctor,
    readonly findAll: FindAllDoctors,
    readonly findById: FindById
  ) {
    this.router.on("post", this.namespace, "/create", [], async (request: Request, response: Response) => {
      try {
        const result = await createDoctor.execute(request.body);
        response.status(201).json({ doctor: result });
      } catch (error: any) {
        response.status(400).json({ message: error.message });
      }
    });
    this.router.on("get", this.namespace, "", [], async (request: Request, response: Response) => {
      try {
        const result = await findAll.execute();
        response.status(200).json({ doctors: result });
      } catch (error: any) {
        response.status(400).json({ message: error.message });
      }
    });
    this.router.on("get", this.namespace, "/:id", [], async (request: Request, response: Response) => {
      try {
        const id = request.params.id;
        const result = await findById.execute({ id });
        response.status(200).json({ doctors: result });
      } catch (error: any) {
        response.status(400).json({ message: error.message });
      }
    });
  }
}

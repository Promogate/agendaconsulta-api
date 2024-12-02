import { Request, Response } from "express";
import { HttpServer } from "../../infra/http/http-server";
import { authMiddleware } from "../../lib/auth-middleware";
import logger from "../../lib/logger";
import { FindAllClinics } from "../../domain/features/clinic/find-all";
import { FindById } from "../../domain/features/clinic/find-by-id";
import { CreateClinic } from "../../domain/features/clinic/create";
import { UpdateClinic } from "../../domain/features/clinic/update";
import { DeleteClinc } from "../../domain/features/clinic/delete";

export default class ClinicController {
  private namespace = "/clinics";

  constructor(
    readonly router: HttpServer,
    readonly getClinics: FindAllClinics,
    readonly findById: FindById,
    readonly create: CreateClinic,
    readonly update: UpdateClinic,
    readonly deleteClinic: DeleteClinc,
  ) {
    this.router.on("get", this.namespace, "", [authMiddleware], async (request: Request, response: Response) => {
      try {
        const result = await this.getClinics.execute();
        response.status(200).json(result);
      } catch (error: any) {
        logger.error({
          name: error.name
        }, error.message);
        response.status(400).json({ message: error.message });
      }
    });
    this.router.on("get", this.namespace, "/:id", [authMiddleware], async (request: Request, response: Response) => {
      try {
        const id = request.params.id;
        const result = await this.findById.execute({ id });
        response.status(200).json(result);
      } catch (error: any) {
        logger.error({
          name: error.name
        }, error.message);
        response.status(400).json({ message: error.message });
      }
    });
    this.router.on("post", this.namespace, "", [authMiddleware], async (request: Request, response: Response) => {
      try {
        const input = request.body;
        const result = await this.create.execute(input);
        response.status(201).json(result);
      } catch (error: any) {
        logger.error({
          name: error.name
        }, error.message);
        response.status(400).json({ message: error.message });
      }
    });
    this.router.on("put", this.namespace, "/:id", [authMiddleware], async (request: Request, response: Response) => {
      try {
        const id = request.params.id;
        const input = request.body;
        const result = await this.update.execute(id, input);
        response.status(200).json(result);
      } catch (error: any) {
        logger.error({
          name: error.name
        }, error.message);
        response.status(400).json({ message: error.message });
      }
    });
    this.router.on("delete", this.namespace, "/:id", [authMiddleware], async (request: Request, response: Response) => {
      try {
        const id = request.params.id;
        const result = await this.deleteClinic.execute(id);
        response.status(200).json(result);
      } catch (error: any) {
        logger.error({
          name: error.name
        }, error.message);
        response.status(400).json({ message: error.message });
      }
    });
  }
}

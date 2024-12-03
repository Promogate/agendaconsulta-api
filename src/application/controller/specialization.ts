import { Request, Response } from "express";
import { CreateSpecialty } from "../../domain/features/specialties/create";
import { HttpServer } from "../../infra/http/http-server";
import logger from "../../lib/logger";

export default class SpecializationController {
  private namespace = "/specialization";

  constructor(
    readonly router: HttpServer,
    readonly createSpecialization: CreateSpecialty
  ) {
    this.router.on("post", this.namespace, "", [], async (request: Request, response: Response) => {
      try {
        const body = request.body as { name: string; };
        const result = await this.createSpecialization.execute({ name: body.name });
        response.status(200).json(result);
      } catch (error: any) {
        logger.error(error.message);
        response.status(400).json({ message: error.message });
      }
    });
  }
}

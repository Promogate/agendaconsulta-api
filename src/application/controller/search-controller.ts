import { Request, Response } from "express";
import { FindClinicsByAddressAndSpecialization } from "../../domain/features/search/find-clinics-by-adress-and-specialization";
import { HttpServer } from "../../infra/http/http-server";

export default class SearchController {
  private namespace: string = "/search";

  constructor(
    readonly router: HttpServer,
    readonly searchUseCase: FindClinicsByAddressAndSpecialization
  ) {
    this.router.on("get", this.namespace, "/clinics", [], async (request: Request, response: Response) => {
      const { address, specialization } = request.query as { address: string; specialization: string; };
      try {
        const result = await searchUseCase.execute({ address, specialization });
        response.status(200).json(result);
      } catch (error: any) {
        response.status(400).json({});
      }
    });
  }
}

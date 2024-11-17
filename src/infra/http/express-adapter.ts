import * as asyncErrors from "express-async-errors";

import express, { Express } from "express";
import httpErrorHandler from "../../lib/http-error-handler";
import logger from "../../lib/logger";
import { HttpServer } from "./http-server";
import httpLogger from "../../lib/http-logger";

export default class ExpressAdapter implements HttpServer {
  private app: Express;

  constructor() {
    asyncErrors;
    this.app = express();
    this.app.use(httpLogger);
    this.app.use(httpErrorHandler);
  }

  on(method: string, namespace: string, url: string, middlewares: Function[], callback: (request: Request, response: Response) => Promise<any>): void {
    this.app._router[method](namespace + url, [...middlewares], async function (req: Request, res: Response) {
      try {
        const output = await callback(req, res);
        return output;
      } catch (error: any) {
        logger.error(error.message);
      }
    });
  }

  listen(port: string | number | undefined): void {
    if (typeof port === "string") {
      const PORT = Number(port);
      this.app.listen(PORT, () => logger.info(`Server is running on port: ${PORT}`));
    } else {
      this.app.listen(port, () => logger.info(`Server is running on port: ${port}`));
    }
  }
}

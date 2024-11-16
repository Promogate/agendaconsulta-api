import { NextFunction, Request, Response } from "express";
import logger from "./logger";

export default function httpLogger(request: Request, response: Response, next: NextFunction) {
  if (request.method === "GET") {
    logger.info({
      method: request.method,
      path: request.path
    });
  }
  logger.info({
    method: request.method,
    path: request.path,
    body: request.body
  });

  next();
}

import { NextFunction, Request, Response } from "express";
import logger from "./logger";

export default function httpErrorHandler(error: Error, request: Request, response: Response, next: NextFunction) {
  logger.error(error.stack);
  next();
  response.status(500).send(error.message);
}

import express from "express";
import logger from "./lib/logger";

const app = express();

app.listen(8000, () => logger.info("Server running on port: 8000"));

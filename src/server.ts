import UserController from "./application/controller/user-controller";
import UserServices from "./application/services/user-services";
import ExpressAdapter from "./infra/http/express-adapter";
import { PrismaUserRepository } from "./infra/repositories/prisma/user-repository";
import prisma from "./lib/prisma-client";

const app = new ExpressAdapter();
const userRepository = new PrismaUserRepository(prisma)
const userServices = new UserServices(userRepository);
new UserController(app, userServices)

app.listen(8000);

import { config } from "dotenv";
config();

import UserController from "./application/controller/user-controller";
import UserServices from "./application/services/user-services";
import ExpressAdapter from "./infra/http/express-adapter";
import PrismaUserRepository from "./infra/repositories/prisma/user-repository";
import prisma from "./lib/prisma-client";
import DoctorController from "./application/controller/doctor-controller";
import CreateDoctorUseCase from "./application/use-cases/doctor/create";
import PrismaDoctorRepository from "./infra/repositories/prisma/doctor-repository";
import FindAllDoctorsUseCase from "./application/use-cases/doctor/find-all";
import FindDoctorByIdUseCase from "./application/use-cases/doctor/find-by-id";
import UpdateDoctorUseCase from "./application/use-cases/doctor/update";
import DeleteDoctorUseCase from "./application/use-cases/doctor/delete";
import ClinicController from "./application/controller/clinic-controller";
import FindAllClinicsUseCase from "./application/use-cases/clinic/find-all";
import PrismaClinicRepository from "./infra/repositories/prisma/clinic-repository";
import FindClinicByIdUseCase from "./application/use-cases/clinic/find-by-id";
import CreateClinicUseCase from "./application/use-cases/clinic/create";
import UpdateClinicUseCase from "./application/use-cases/clinic/update";
import DeleteClinicUseCase from "./application/use-cases/clinic/delete";
import AuthController from "./application/controller/auth-controller";
import AuthenticateUserUseCase from "./application/use-cases/authenticate-user";
import PrismaAuthRepository from "./infra/repositories/prisma/auth-repository";
import SearchController from "./application/controller/search-controller";
import { FindClinicsByAddressAndSpecializationUseCase } from "./application/use-cases/search/find-clinics-by-adress-and-specialization";
import { FindClinicsByAddressAndSpecializationRepository } from "./infra/repositories/prisma/find-clinic-repository";
import AdministratorController from "./application/controller/administrator-controller";
import AuthenticateAdminUseCase from "./application/use-cases/administrator/authenticate";
import SpecializationController from "./application/controller/specialization";
import CreateSpecialtyUseCase from "./application/use-cases/specialty/create";

const app = new ExpressAdapter();
const userRepository = new PrismaUserRepository(prisma);
const doctorRepository = new PrismaDoctorRepository(prisma);
const clinicRepository = new PrismaClinicRepository(prisma);
const authRepository = new PrismaAuthRepository(prisma);
const findClinicsByAddressAndSpecializationRepository = new FindClinicsByAddressAndSpecializationRepository(prisma);

const userServices = new UserServices(userRepository);
const createDoctorUseCase = new CreateDoctorUseCase(doctorRepository);
const findAllDoctors = new FindAllDoctorsUseCase(doctorRepository);
const findByIdDoctor = new FindDoctorByIdUseCase(doctorRepository);
const updateDoctor = new UpdateDoctorUseCase(doctorRepository);
const deleteDoctor = new DeleteDoctorUseCase(doctorRepository);
const findClinics = new FindAllClinicsUseCase(clinicRepository);
const findClinicById = new FindClinicByIdUseCase(clinicRepository);
const createClinic = new CreateClinicUseCase(clinicRepository);
const updateClinic = new UpdateClinicUseCase(clinicRepository);
const deleteClinic = new DeleteClinicUseCase(clinicRepository);
const authenticateUser = new AuthenticateUserUseCase(authRepository);
const findClinicsByAddressAndSpecializationUseCase = new FindClinicsByAddressAndSpecializationUseCase(findClinicsByAddressAndSpecializationRepository);

const authenticateAdminUseCase = new AuthenticateAdminUseCase(prisma);
const createSpecialtyUseCase = new CreateSpecialtyUseCase(prisma);

new UserController(app, userServices);
new AuthController(app, authenticateUser);
new DoctorController(app, createDoctorUseCase, findAllDoctors, findByIdDoctor, updateDoctor, deleteDoctor);
new ClinicController(app, findClinics, findClinicById, createClinic, updateClinic, deleteClinic);
new SearchController(app, findClinicsByAddressAndSpecializationUseCase);
new AdministratorController(app, authenticateAdminUseCase);
new SpecializationController(app, createSpecialtyUseCase);

app.listen(8000);

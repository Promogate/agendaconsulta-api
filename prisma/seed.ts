import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.administrator.upsert({
    where: { email: "admin@mail.com" },
    create: {
      name: "Administrador",
      email: "admin@mail.com",
      password_hash: "12354678",
      admin_level: "ADMIN"
    },
    update: {}
  });
  const clinica = await prisma.specialization.upsert({
    where: { specialization_name: "Clínica Geral" },
    create: {
      specialization_name: "Clínica Geral"
    },
    update: {}
  });
  const dermatologia = await prisma.specialization.upsert({
    where: { specialization_name: "Dermatologia" },
    create: {
      specialization_name: "Dermatologia"
    },
    update: {}
  });
  const endocrinologia = await prisma.specialization.upsert({
    where: { specialization_name: "Endocrinologia" },
    create: {
      specialization_name: "Endocrinologia"
    },
    update: {}
  });
  const mauro = await prisma.doctor.upsert({
    where: { email: "doctor1@mail.com" },
    create: {
      email: "doctor1@mail.com",
      first_name: "Mauro",
      last_name: "Rocha",
      password_hash: "12345678",
      phone: "91912345678",
      is_phone_whatsapp: true,
    },
    update: {}
  });
  const andressa = await prisma.doctor.upsert({
    where: { email: "doctor2@mail.com" },
    create: {
      email: "doctor2@mail.com",
      first_name: "Andressa",
      last_name: "Amaral",
      password_hash: "12345678",
      phone: "91912345678",
      is_phone_whatsapp: true,
    },
    update: {}
  });
  const hugo = await prisma.doctor.upsert({
    where: { email: "doctor3@mail.com" },
    create: {
      email: "doctor4@mail.com",
      first_name: "Hugo",
      last_name: "Souza",
      password_hash: "12345678",
      phone: "91912345678",
      is_phone_whatsapp: true,
    },
    update: {}
  });
  await prisma.specializationOnDoctor.createMany({
    data: [
      {
        doctor_id: mauro.id,
        specialization_id: clinica.id
      },
      {
        doctor_id: andressa.id,
        specialization_id: clinica.id
      },
      {
        doctor_id: andressa.id,
        specialization_id: dermatologia.id
      },
      {
        doctor_id: hugo.id,
        specialization_id: clinica.id
      },
      {
        doctor_id: hugo.id,
        specialization_id: dermatologia.id
      },
      {
        doctor_id: hugo.id,
        specialization_id: endocrinologia.id
      },
    ]
  });
  const clinicas = await prisma.clinic.createManyAndReturn({
    data: [
      {
        email: "clinic1@mail.com",
        address: "Rua 1",
        name: "Clínica São João",
        phone: "919123455678",
        is_phone_whatsapp: true,
      },
      {
        email: "clinic2@mail.com",
        address: "Rua 2",
        name: "Clínica Saúde Família",
        phone: "919123455678",
        is_phone_whatsapp: true,
      },
    ]
  });
  await prisma.specializationOnClinic.createMany({
    data: [
      {
        clinic_id: clinicas[0].id,
        specialization_id: clinica.id
      },
      {
        clinic_id: clinicas[1].id,
        specialization_id: dermatologia.id
      },
      {
        clinic_id: clinicas[1].id,
        specialization_id: endocrinologia.id
      }
    ]
  });
  await prisma.clinicDoctorAvailability.createMany({
    data: [
      {
        clinic_id: clinicas[0].id,
        doctor_id: mauro.id,
        day_of_week: "[0,1,2,3]",
        start_time: "07:00",
        end_time: "11:30"
      },
      {
        clinic_id: clinicas[0].id,
        doctor_id: andressa.id,
        day_of_week: "[1,2,3]",
        start_time: "08:00",
        end_time: "11:30"
      },
      {
        clinic_id: clinicas[1].id,
        doctor_id: andressa.id,
        day_of_week: "[4,5]",
        start_time: "14:00",
        end_time: "17:30"
      },
      {
        clinic_id: clinicas[1].id,
        doctor_id: hugo.id,
        day_of_week: "[0,1,2,3,4]",
        start_time: "08:00",
        end_time: "12:00"
      },
      {
        clinic_id: clinicas[1].id,
        doctor_id: hugo.id,
        day_of_week: "[0,1,2,3,4]",
        start_time: "14:00",
        end_time: "17:00"
      }
    ]
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

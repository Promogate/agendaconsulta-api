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

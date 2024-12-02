import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();
async function main() {
  const passwordHash = await hash("123456789", 10);

  await prisma.administrator.upsert({
    where: { email: "admin@mail.com" },
    create: {
      name: "Administrador",
      email: "admin@mail.com",
      password_hash: passwordHash,
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

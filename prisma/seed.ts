import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.role.createMany({
    data: [
      {
        name: "admin",
        id: "1",
      },
      {
        name: "reader",
        id: "2",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

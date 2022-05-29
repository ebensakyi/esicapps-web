import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { userType } from "./userType";

import { region } from "./region";
async function main() {
 
  await prisma.userType.createMany({
    data: userType,
  });
 
  await prisma.region.createMany({
    data: region,
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

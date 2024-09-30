import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findOneService = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user;
};

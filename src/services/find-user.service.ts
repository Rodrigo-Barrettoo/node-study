import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findUserService = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user;
};

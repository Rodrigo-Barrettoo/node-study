import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllService = async () => {
  const links = await prisma.link.findMany();

  return links;
};

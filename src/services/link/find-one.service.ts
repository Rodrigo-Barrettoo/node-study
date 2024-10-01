import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findOneService = async (shortUrl: string) => {
  const link = await prisma.link.findUnique({
    where: { shortUrl },
  });

  return link;
};

import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

type CreateLinkProps = {
  originalUrl: string;
  userId: number;
};

export const createLinkService = async ({
  originalUrl,
  userId,
}: CreateLinkProps) => {
  const shortUrl = uuidv4().slice(0, 8);

  const linkExists = await prisma.link.findUnique({
    where: { shortUrl },
  });

  if (linkExists) {
    return null;
  }

  const linkCreated = await prisma.link.create({
    data: {
      originalUrl,
      shortUrl,
      userId,
    },
  });

  return linkCreated;
};

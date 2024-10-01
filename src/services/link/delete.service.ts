import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteService = async (id: string) => {
  const linkExists = await prisma.link.findUnique({
    where: { id: Number(id) },
  });

  if (!linkExists) {
    return null;
  }

  await prisma.link.delete({
    where: { id: Number(id) },
  });

  return { message: "Link deletado com sucesso" };
};

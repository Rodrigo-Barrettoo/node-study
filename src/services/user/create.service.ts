import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

type CreateUserProps = {
  name: string;
  email: string;
  password: string;
};

export const createUserService = async (user: CreateUserProps) => {
  const { name, email, password } = user;

  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) {
    return null;
  }

  const hashedPassword = await hash(password, 10);

  const userCreated = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return userCreated;
};

import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../env";

const prisma = new PrismaClient();

type AuthUserProps = {
  email: string;
  password: string;
};

export const authentication = async (userAuth: AuthUserProps) => {
  const { email, password } = userAuth;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return null;
  }

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  const token = jwt.sign(
    { user: { email: user.email, name: user.name } },
    env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
};

import { Request, Response } from "express";
import findUser from "../services/find-user.service";

export const users = [
  { id: 1, name: "Rodrigo Barreto" },
  { id: 2, name: "Pedro Jorge" },
];

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = findUser(Number(id));

  res.json(user);
};

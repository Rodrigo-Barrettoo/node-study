import { Request, Response } from "express";

import { createUserService } from "../services/create-user.service";
import { findUserService } from "../services/find-user.service";
import { allUsersService } from "../services/find-users.service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await allUsersService();

    if (!users) {
      return res.status(404).json({ message: "Nenhum usuário não encontrado" });
    }

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await findUserService(Number(id));

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await createUserService({ name, email, password });

    if (!user) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    res.status(201).json({ user, message: "Usuário criado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
};

import { Request, Response } from "express";
import { authentication } from "../services/auth.service";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await authentication({ email, password });

    if (!token) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }

    return res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

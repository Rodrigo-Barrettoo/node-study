import { Request, Response } from "express";
import { findAllService } from "../services/link/find-all.service";

export const getLinks = async (req: Request, res: Response) => {
  try {
    const links = await findAllService();

    if (!links) {
      return res.status(404).json({ message: "Nenhum link não encontrado" });
    }

    res.json(links);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

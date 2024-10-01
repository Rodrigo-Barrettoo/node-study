import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../env";
import { createLinkService } from "../services/link/create.service";
import { deleteService } from "../services/link/delete.service";
import { findAllService } from "../services/link/find-all.service";
import { findOneService } from "../services/link/find-one.service";

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

export const createLink = async (req: Request, res: Response) => {
  try {
    const { originalUrl } = req.body;

    const token = req.headers.authorization?.split(" ")[1];

    const decoded = jwt.verify(token!, env.JWT_SECRET) as JwtPayload;

    const link = await createLinkService({
      originalUrl,
      userId: decoded.user.id,
    });

    if (!link) {
      return res.status(400).json({ message: "Link já cadastrado" });
    }

    res.status(201).json({ link, message: "Link criado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
};

export const deleteLink = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const link = await deleteService(id);

    if (!link) {
      return res.status(400).json({ message: "Link não encontrado" });
    }

    return res.status(200).json(link);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
};

export const redirectLink = async (req: Request, res: Response) => {
  const { shortUrl } = req.params;

  try {
    const link = await findOneService(shortUrl);

    if (!link) {
      return res.status(404).json({ message: "Link não encontrado" });
    }

    return res.redirect(link.originalUrl);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao redirecionar link", error });
  }
};

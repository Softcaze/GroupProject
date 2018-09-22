import { Request, Response } from "express";

/**
 * Upload un fichier sur le serveur
 * @param req 
 * @param res 
 */
export let uploadedFile = async (req: any, res: Response) => {
    // Réponse après upload file
    res.status(200).send(req.file.filename);
}
import { Request, Response } from "express";

/**
 * Upload un fichier sur le serveur
 * @param req 
 * @param res 
 */
export let uploadedFile = async (req: Request, res: Response) => {
    // Réponse après upload file
    res.send("OK");
}
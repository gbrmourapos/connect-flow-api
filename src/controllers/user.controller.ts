import { HTTP_RESPONSE } from "../constants"
import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
    res.status(HTTP_RESPONSE.OK).send({succces: true});
}

export { getUser }
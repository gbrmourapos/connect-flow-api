
import { HTTP_RESPONSE } from "../constants";
import { Request, Response } from "express";

const login = async (req: Request, res: Response) =>{
  res.status(HTTP_RESPONSE.OK).send({succces: true});
}
const register = async (req: Request, res: Response) => {
  res.status(HTTP_RESPONSE.OK).send({success: true});
}
const confirmTokens = async (req: Request, res: Response) => {
  res.status(HTTP_RESPONSE.OK).send({success: true});
}
const changePassword = async (req: Request, res: Response) => {
  res.status(HTTP_RESPONSE.OK).send({success: true});
}

export {login, register, confirmTokens, changePassword };

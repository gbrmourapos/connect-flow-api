import { Router } from "express";
import { getUser } from "../controllers/user.controller";

const usersRoute = Router();

usersRoute.get("/", getUser);

export { usersRoute };
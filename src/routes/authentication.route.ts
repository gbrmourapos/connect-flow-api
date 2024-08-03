import { Router } from "express";
import { login } from "../controllers/authentication.controller";
import { register } from "../controllers/authentication.controller";
import { confirmTokens } from "../controllers/authentication.controller";
import { changePassword } from "../controllers/authentication.controller";

const authRoute = Router();

authRoute.post("/", login);
authRoute.post("/", register);
authRoute.post("/", confirmTokens);
authRoute.post("/", changePassword);

export { authRoute };
import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { registerSchema, loginSchema } from "../schemas/aut.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", validateSchema(), logout);

router.get("/profile", validateSchema(), authRequired, profile);

export default router;

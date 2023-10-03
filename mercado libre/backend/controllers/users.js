import bcrypt from "bcrypt";
import User from'../models/usersModels.js'
import { Router } from "express";
//import express from "express";

export const usersRouter = Router();
//usersRouter.use(express.json());

usersRouter.post("/", async (request, response) => {
  try {
    const { username, password, numerPhone, legalEntity } = request.body;

    const saltRounsd = 10;
    const passwordHash = await bcrypt.hash(password, saltRounsd);

    const user = new User({
      username,
      password: passwordHash,
      numerPhone,
      legalEntity,
    });
    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Something went wrong" });
  }
});

usersRouter.get("/", async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users); 
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Something went wrong" });
  }
});

export default usersRouter;


import User from "../models/users.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../libs/jwt.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const isMatch = await bcryptjs.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Password",
      });
    }

    const newUser = new User({
      email,
      password: passwordHash,
      username,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAT: userSaved.createdAT,
      updateAT: userSaved.updateAT,
    });
  } catch (error) {
    console.log("Este es el error: ", error);
  }
};

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  const passwordHash = await bcryptjs.hash(password, 10);

  try {
    const newUser = new User({
      email,
      password: passwordHash,
      username,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAT: userSaved.createdAT,
      updateAT: userSaved.updateAT,
    });
  } catch (error) {
    console.log("Este es el error: ", error);
  }
};

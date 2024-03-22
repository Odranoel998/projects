import User from "../models/users.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import { userFound, isMatch } from "../utils/auth.controllers.utils.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(404).json({
        message: "The email does not exist",
      });

    const isMatch = await bcryptjs.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(404).json({
        message: "The password is incorrect",
      });
    }
    // isMatch(res, password, userFound(res, email));

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound._username,
    });

    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
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

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) {
    return res.status(400).json({ message: "User not found" });
  }
  return res.json({
    id: userFound._id,
    username: userFound._username,
    email: userFound._email,
    createdAt: userFound.createdAT,
    updateAT: userFound.updateAT,
  });
};

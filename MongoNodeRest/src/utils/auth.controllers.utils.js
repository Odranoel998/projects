import User from "../models/users.model.js";
import bcryptjs from "bcryptjs";

export const messageJson = (res, code, msj) => {
  return res.status(code).json({ message: { msj } });
};

export const userFound = async (res, email) => {
  const user = await User.findOne({ email });
  if (!userFound) {
    messageJson(res, 404, "Usuario incorrecto");
  }
  console.log(user);
  return user;
};

export const isMatch = async (res, password, fuction) => {
  const user = fuction;
  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    messageJson(res, 404, "Password incorrecto");
  }
  return user;
};

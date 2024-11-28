import jwt from "jsonwebtoken";
import config from "./config.json" assert { type: "json" };

export function generateToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, {
    expiresIn: "1d",
  });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch (err) {
    console.error("Invalid token:", err.message);
    return null;
  }
}

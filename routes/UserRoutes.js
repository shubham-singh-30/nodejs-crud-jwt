import express from "express";
import {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} from "../controller/user.js";
import {jwtToken} from "../middleware/jwtToken.js";

const router = express.Router();


router.get("/",jwtToken, getUser);

router.get("/:id", getUserById);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;

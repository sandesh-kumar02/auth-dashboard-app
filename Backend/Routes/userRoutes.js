import express from "express";
const router = express.Router();
import {
  Dashboard,
  Login,
  Signup,
  isAuthenticated,
} from "../controllers/userControllers.js";

router.post("/signup", Signup);
router.post("/login", Login); // lowercase for consistency
router.get("/dashboard", isAuthenticated, Dashboard);

export default router;

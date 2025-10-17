import express from "express";
import session from "express-session";
import { configDotenv } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
const app = express();
configDotenv();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import userRoutes from "./Routes/userRoutes.js";
import User from "./models/user.js";

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      path: "/",
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// local strategy set karna

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", userRoutes);

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

main()
  .then(() => {
    console.log("DATABASE ARE SUCCESSFUL CONNECT");
  })
  .catch((error) => {
    console.log("this is DATABASE ERROR", error);
  });

app.listen(process.env.PORTNO || 3000, () => {
  console.log("server is running on port no. 3000");
});

import User from "../models/user.js";
import passport from "passport";

export const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email });
    const registeredUser = await User.register(user, password);
    console.log(registeredUser);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: registeredUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const Login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({
        success: true,
        message: "Login Successfully",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    });
  })(req, res, next); // 👈 ye line sahi tarike se likhi gayi
};

// protected dashboard Route

export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "You must be logged in" });
};

export const Dashboard = (req, res) => {
  res.json({ data: `Welcome  ${req.user.username} to your dashboard` });
};

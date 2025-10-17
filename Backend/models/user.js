import mongoose from "mongoose";
import localMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.plugin(localMongoose);

const User = mongoose.model("User", userSchema);
export default User;

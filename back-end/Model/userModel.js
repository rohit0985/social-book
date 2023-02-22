import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    isAdmin: { type: Boolean, required: false },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesin: String,
    worksAt: String,
    relationShip: String,
    followers: [],
    following: [],
  },
  {
    timestamps: true,
    versionKey : false
  }
);


const UserModel = mongoose.model("users", userSchema);

export default UserModel;
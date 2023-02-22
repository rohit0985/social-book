import express from "express";
import { deleteUser, followUser, getUser, unfollowUser, updateUser } from "../Controller/UserController.js";

const UserRouter  = express.Router();
UserRouter.get("/:id", getUser);
UserRouter.put("/:id", updateUser)
UserRouter.delete("/:id", deleteUser)
UserRouter.put("/:id/follow", followUser)
UserRouter.put("/:id/unfollow", unfollowUser)


export default UserRouter;
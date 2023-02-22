import UserModel from "../Model/userModel.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(400).json({ err: "user not found" });
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  } else {
    res
      .status(403)
      .json({ err: "Excess Denied! you can only update your own profile" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json({ msg: "user deleted successfully" });
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  } else {
    res
      .status(403)
      .json({ err: "Excess Denied! you can only delete your own profile" });
  }
};

export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json({ msg: "excess forbidden" });
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);
      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json({ msg: "started following" });
      } else {
        res.status(403).json({ msg: "You are following already" });
      }
    } catch (error) {
      res.status(403).json({ err: error.message });
    }
  }
};

export const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json({ msg: "excess forbidden" });
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);
      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers: currentUserId } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json({ msg: "unfollowed" });
      } else {
        res.status(403).json({ msg: "user is not followed by you" });
      }
    } catch (error) {
      res.status(403).json({ err: error.message });
    }
  }
};

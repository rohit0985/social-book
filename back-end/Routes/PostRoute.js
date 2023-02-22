import express from "express"
import { createPost, deletePost, getPost, updatePost } from "../Controller/PostController.js"
const PostRouter = express.Router()

PostRouter.post("/", createPost);
PostRouter.get("/:id", getPost);
PostRouter.put("/:id", updatePost);
PostRouter.delete("/:id", deletePost);

export default PostRouter
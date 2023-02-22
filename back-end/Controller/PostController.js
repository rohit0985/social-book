import mongoose from "mongoose";
import PostModel from "../Model/postModel.js";

export const createPost = async (req, res)=>{
    const newPost = new PostModel(req.body);
    try {
        await newPost.save();
        res.status(200).json({"msg":"Post created"})
    } catch (error) {
        res.status(500).json({"err": error.message})
    }
}


export const getPost = async(req, res)=>{
    const id = req.params.id;
    try {
        const posts = await PostModel.findById(id);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({"err": error.message})
    }
}


export const updatePost = async(req, res)=>{
    const postId = req.params.id;
    const {userId} = req.body;
    try {
        const post  = await PostModel.findById(postId);
        if(post.userId == userId){
            await post.updateOne({$set:req.body});
            res.status(200).json({"msg":"Post updated"});
        }else{
            res.status(403).json({"msg": "excess denied"})
        }
    } catch (error) {
        res.status(500).json({"err": error.message})
    }
}

export const deletePost = async(req, res)=>{
    const postId = req.params.id;
    const {userId} = req.body;
    try {
        const post  = await PostModel.findById(postId);
        if(post.userId == userId){
            await post.deleteOne();
            res.status(200).json({"msg":"Post deleted"});
        }else{
            res.status(403).json({"msg": "excess denied"})
        }
    } catch (error) {
        res.status(500).json({"err": error.message})
    }
}
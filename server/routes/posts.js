import express from "express";
import { createPost, deletePost, getMemories, likePost, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getMemories);

router.post('/createPost',createPost);

router.patch('/:id',updatePost);

router.delete('/:id',deletePost)

router.patch('/:id/likePost',likePost);

export default router;

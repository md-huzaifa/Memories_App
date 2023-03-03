import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getMemories = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No post with that id");

    const updatedPost = await PostMessage.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No post with this id");

    await PostMessage.findByIdAndDelete(id);

    res.status(205).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No post with that id exists!");

    const selectedPost = await PostMessage.findById(id);
    let likedcount = 0
    
    if(selectedPost)
        likedcount = selectedPost?.likeCount +1

    const updatedLikedPost = await PostMessage.findByIdAndUpdate(
      id,
      { likeCount: likedcount },
      { new: true }
    );

    res.json(updatedLikedPost);
    
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

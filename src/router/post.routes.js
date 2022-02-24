const express = require("express");
const {
  getAllPosts,
  createPost,
  getSinglePost,
  deletePost,
  updatePost,
} = require("../controller/post.controller");

const PostRouter = express.Router();

PostRouter.route("/") // http://localhost:9090/posts
  .get(getAllPosts)
  .post(createPost);

PostRouter.route("/:postId")
    .get(getSinglePost)
    .patch(updatePost)
    .delete(deletePost);

module.exports = PostRouter;

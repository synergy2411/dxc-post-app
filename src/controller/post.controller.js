const PostModel = require("../model/post.model");
const getAllPosts = async (req, res)=>{
    try{
        const posts = await PostModel.find()
        return res.send(posts)
    }catch(err){
        console.log(err);
        return res.send(err);
    }
}
const createPost = (req, res) => {
    const post = new PostModel(req.body);
    post.save()
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            console.log(err);
            return res.send(err);
        })
}
const getSinglePost = async(req, res) => {
    const { postId } = req.params;
    try{
        const result = await PostModel.findById(postId)
        return res.send(result)
    }catch(err){
        console.log(err);
        return res.send(err);
    }
}
const deletePost = async(req, res) => {
    const { postId } = req.params;
    try{
        const result = await PostModel.findByIdAndDelete(postId)
        return res.send(result)
    }catch(err){
        console.log(err);
        return res.send(err);
    }
}
const updatePost = async(req, res) => {
    const { postId } = req.params;
    try{
        const result = await PostModel.findByIdAndUpdate(postId, req.body)
        return res.send(result)
    }catch(err){
        console.log(err);
        return res.send(err);
    }
}

module.exports = {
    getAllPosts, createPost, getSinglePost, deletePost, updatePost
}
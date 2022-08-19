const Post = require('../models/Post');

//Get all posts
exports.getAllPosts = async (req,res,next) => {
    try {
        const posts = await Post.find({}).populate('author');
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data:{posts}
        })
    } catch (error) {
        res.json(error);
    }
}
//Create One posts
exports.createOnePost = async (req,res,next) => {
    try {
        const posts = await Post.find({}).populate('author');
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data:{posts}
        })
    } catch (error) {
        res.json(error);
    }
}
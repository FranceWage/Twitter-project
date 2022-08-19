const express = require('express');

const {getAllPosts, createOnePost, updateOnePost, deleteOnePost} = require('../controllers/postController.js');

const Router = express.Router();

Router.route('/'),get(getAllPosts).post(createOnePost);

Router.route('/:postId').put(updateOnePost).delete(deleteOne);

module.exports = Router;
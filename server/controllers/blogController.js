
BlogPost = require("../models/blog");


const createNewBlog = async (req, res) => {
    const { title , content , author, tags, date} = req.body;
    try {
        const blogPost = await BlogPost.create({ title , content , author , tags , date});
        res.status(200).json(blogPost);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogPost.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json ({error: error.message});
    }
};

module.exports = {
    createNewBlog,
    getAllBlogs,
}
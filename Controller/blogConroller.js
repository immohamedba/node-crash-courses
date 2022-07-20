const Blog = require('../models/blogs');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
};

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog details' })
        })
        .catch((err) => {
            res.status(404).render('404', {title :'Blog not found '});
        })
}

const blog_create = (req, res) => {
    res.render('create', { title: 'Create a new blog' });
}

const blog_create_post = () => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_delete = () => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
}
module.exports = {
    blog_index,
    blog_details,
    blog_create,
    blog_create_post,
    blog_delete
}
const express = require('express');
const Blog = require('../models/blogs');
const router = express.Router();
const blogController =require('../Controller/blogConroller')

router.get('/', blogController.blog_index );

router.post('/',blogController.blog_create_post);
router.get('/create', blogController.blog_create);
router.get('/:id',blogController.blog_details );
router.delete('/:id', blogController.blog_delete);

module.exports = router;
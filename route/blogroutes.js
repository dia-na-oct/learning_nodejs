const express=require('express');
const router=express.Router();
const blogcontroller=require('../controllers/blogcontroller');

router.post('/',blogcontroller.blog_create_post);

router.get('/create',blogcontroller.blog_create);

router.get('/:id',blogcontroller.blog_details);

router.get('/',blogcontroller.blog_index);



module.exports=router;

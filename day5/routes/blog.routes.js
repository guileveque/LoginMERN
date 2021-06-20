const router = require('express').Router();
const blogController = require('../controllers/blog.controller');


router.post('/create', blogController.BlogCreate);
router.get('/', blogController.getAllPost);
router.delete('/delete/:_id', blogController.deleteBillet);

module.exports = router;

import express from 'express';

//Internal dependencies:
import blogs from './blog.routes';
import auth from './auth.routes';
import products from  './products.routes';

const router = express.Router();

router.use ('/auth', auth);
router.use('/blog', blogs);
router.use('/product', products);

export default router;
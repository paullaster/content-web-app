import express from 'express';

//Internal dependencies:
import blogs from './blog.routes';
import auth from './auth.routes';

const router = express.Router();

router.use('/blog', blogs);
router.use ('/auth', auth);

export default router;
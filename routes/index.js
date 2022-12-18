import express from 'express';

//Internal dependencies:
import blogs from './blog.routes';

const router = express.Router();

router.use('/blog', blogs);

export default router;
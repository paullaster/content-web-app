import express from 'express';

const router = express.Router();

router.get( '/', (req, res) => {
    res.send ("This is from router")
});

export default router;
import { Router } from 'express';
import articleController from '../controllers/articleController.js';

const router = Router();

router.get('/get-featured-articles', articleController.getFeaturedArticles);
router.get('/:id', articleController.getArticleById);

export default router;
import { Router } from 'express';
import articleController from '../controllers/articleController.js';

const router = Router();

router.get('/get-featured', articleController.getFeaturedArticles);
router.get('/get-all', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);

export default router;

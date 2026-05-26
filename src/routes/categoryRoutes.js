import { Router } from 'express';
import categoryController from '../controllers/categoryController.js';

const router = Router();

router.get('/get-categories', categoryController.getCategories);
router.get('/:categoryName/get-top-articles', categoryController.getTopArticlesPerCategory);

export default router;

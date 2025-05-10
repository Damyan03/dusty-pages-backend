import { Router } from 'express';
import categoryController from '../controllers/categoryController.js';

const router = Router();

router.get('/get-categories', categoryController.getCategories);

export default router;
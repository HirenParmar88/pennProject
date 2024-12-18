import express from 'express';
import { addProduct, deleteProducts, getProduct, updProduct } from '../controllers/productsController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getProduct)
router.post('/', verifyToken, addProduct)
router.put('/:id', verifyToken, updProduct)
router.delete('/:id', verifyToken, deleteProducts)


export default router;
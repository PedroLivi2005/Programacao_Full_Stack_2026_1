import {Router} from 'express';
import productController from'../controllers/product.controller';

const router = Router();

router.post('/producs', productController.create);
router.get('/producs', productController.list);

export default router;
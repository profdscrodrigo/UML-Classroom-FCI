import {Router} from 'express';
import multer from 'multer';
import path from 'node:path';

import {listCategoriesController} from './app/controllers/categories/listCategoriesController';
import {createCategoriesController} from './app/controllers/categories/createCategoriesController';
import {listProductsController} from './app/controllers/products/listProductsController';
import {createProductsController} from './app/controllers/products/createProductsController';
import {listProductsByCategoryController} from './app/controllers/categories/listProductsByCategoryController';
import {listOrdersController} from './app/controllers/orders/listOrdersController';
import {createOrdersController} from './app/controllers/orders/createOrdersController';
import {changeOrderStatusController} from './app/controllers/orders/changeOrderStatusController';
import {cancelOrdersController} from './app/controllers/orders/cancelOrdersController';
import { createRestaurantsController } from './app/controllers/restaurants/createRestaurantsController';
import { listRestaurantsController } from './app/controllers/restaurants/listRestaurantsController';
import { listAllProductsByRestaurantController } from './app/controllers/restaurants/listAllProductsByRestaurant';

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb)  => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

export const router = Router();

// Restaurants
router.post('/restaurants', createRestaurantsController);
router.get('/restaurants', listRestaurantsController);
router.get('/restaurants/:restaurantCode/products', listAllProductsByRestaurantController);
router.get('/restaurants/:restaurantCode/categories/:categoryId/products', listProductsByCategoryController);

// Categories
router.get('/categories', listCategoriesController);
router.get('/categories/:categoryId/products', listProductsByCategoryController);
router.post('/categories', createCategoriesController);


// Products
router.get('/products', listProductsController);
router.post('/products', upload.single('image'), createProductsController);


// Orders
router.get('/orders', listOrdersController);
router.post('/orders', createOrdersController);
router.patch('/orders/:orderId', changeOrderStatusController);
router.delete('/orders/:orderId', cancelOrdersController);

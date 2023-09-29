import express from 'express';

// ---------- ---------- ---------- ---------- ----------

import {productController} from "../dependencies";


const productRouter: express.Router = express.Router();

productRouter.post('/', productController.create.bind(productController))



export { productRouter };
import express from 'express';
import { Shopcrller } from './shop.cntroller';



const router = express.Router();


router.post('/create',Shopcrller.create)



export const ShopRoute=router

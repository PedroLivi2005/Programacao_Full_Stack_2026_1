import {Request, Response} from 'express';
import productService from '../services/product.service'

export default{
    async create(req: Request, res: Response){
        const product = await productService.create( req.body );
        res.json( product );
    }, 

    async list(){
        const products = await productService.list();
        res.json( products);
    }
};
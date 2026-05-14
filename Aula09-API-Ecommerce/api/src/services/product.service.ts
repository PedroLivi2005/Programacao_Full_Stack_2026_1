//import prisma  from '../database/prisma';
import prisma = require('../database/prisma');

export default{
    async create(data: any){
        return prisma.product.create( {data} );
    }, 

    async list(){
        return prisma.product.findMany( { include: {category:true} });
    }
};
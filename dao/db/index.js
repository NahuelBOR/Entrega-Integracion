import mongoose from 'mongoose';  
import { Cart } from './models/carts.model.js';
import { Product } from './models/products.model.js';
//const mongoose = require('mongoose');

const dataBase = {
    //connetion: null,
    connect: () => {
        return mongoose.connect("mongodb+srv://elnau94:necochea53@cluster0.cn8xroo.mongodb.net/ecomerce")
        .then( async () => {
            console.log('Base de Datos Conectada');

            /*Cart.create({
                date: '17/02/2024'
            })*/

            let cart1 = await Cart.findOne({ _id: '65f255e662105326a39778c2'}).populate('products.product')
            /*console.log(cart1);
            cart1.products.push({product: '65d77aa13a936fa2d248bd16'})
            console.log(cart1);
            await Cart.updateOne({ _id: '65f255e662105326a39778c2'}, cart1)*/
            console.log(JSON.stringify(cart1, null, '\t'))









        }).catch((err) => {
            console.log(err);
        })
    }
}

export default dataBase

/*module.exports = {
    connetion: null,
    connect: () => {
        return mongoose.connect("mongodb+srv://elnau94:necochea53@cluster0.cn8xroo.mongodb.net/ecomerce")
        .then(() => {
            console.log('Base de Datos Conectada');
        }).catch((err) => {
            console.log(err);
        })
    }
}*/
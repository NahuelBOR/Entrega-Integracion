import { Cart } from '../models/carts.model.js'

export class CartManagerMongo{

    async allCarts(){
        try{
            let resp = await Cart.find()
            return resp
        }catch(err){
            return 'Error: ', err
        }
    }

    async addCart(prod){
        try{
            await Cart.create(prod)
            return 'Carrito creado'
        }catch(err){
            return 'Error: ', err
        }
    }

    async getCartById(id){
        try{
            let resp = await Cart.findById(id)
            return resp
        }catch(err){
            return 'Error: ', err
        }
    }

    async updateCartById(id, change) {
        try{
            await Cart.findByIdAndUpdate(id, change)
            return true
        }catch(err){
            return 'Error: ', err
        }
    }

    async deleteProductById(id) {
        try{
            await Cart.findByIdAndDelete(id)
            return true
        }catch(err){
            return 'Error: ', err
        }
    }
}
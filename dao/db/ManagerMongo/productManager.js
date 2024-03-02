import { Product } from '../models/products.model.js'

export class ProductManagerMongo{

    async allProduct(){
        try{
            let resp = await Product.find()
            return resp
        }catch(err){
            return 'Error: ', err
        }
    }

    async addProduct(prod){
        try{
            await Product.create(prod)
            return 'Producto creado'
        }catch(err){
            return 'Error: ', err
        }
    }

    async getProductById(id){
        try{
            let resp = await Product.findById(id)
            return resp
        }catch(err){
            return 'Error: ', err
        }
    }

    async updateProductById(id, change) {
        try{
            await Product.findByIdAndUpdate(id, change)
            return true
        }catch(err){
            return 'Error: ', err
        }
    }

    async deleteProductById(id) {
        try{
            await Product.findByIdAndDelete(id)
            return true
        }catch(err){
            return 'Error: ', err
        }
    }





















}
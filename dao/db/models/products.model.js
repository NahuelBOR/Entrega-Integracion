import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true,
        enum: ['Hogar', 'Cocina', 'Higiene']
    },
    stock: {
        type: Number,
        default: 10
    }
})



export const Product = mongoose.model('Product', productSchema)
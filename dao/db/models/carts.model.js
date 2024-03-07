import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    product: {
        type: Array,
        require: true
    },
    stock: {
        type: Number,
        default: 1
    }
})



export const Cart = mongoose.model('Cart', cartSchema)
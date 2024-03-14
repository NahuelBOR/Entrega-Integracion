import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    date: {
        type: String,
        require: true
    },
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product'
                }
            }
        ],
        require: true
    }
})



export const Cart = mongoose.model('Cart', cartSchema)
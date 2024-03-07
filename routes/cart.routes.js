import { Router } from "express";
import { CartManagerMongo } from "../dao/db/ManagerMongo/cartManager.js";

const cartManager = new CartManagerMongo()

const cartRoutes = Router()

cartRoutes.get('/allCarts', async (req, res) => {
    const resp = await cartManager.allCarts()
    if(resp){
        res.status(200).send(resp)
    }else{
        res.status(404).send(resp)
    }
})

cartRoutes.post('/addCart', async(req, res) => {
    let mensaje = await cartManager.addCart(req.body)
    res.status(201).send({
        msj: mensaje,
        data: req.body
    })    
})

cartRoutes.get('/getCart/:id', async (req, res) => {
    const { id } = req.params
    const prod = await cartManager.getCartById(id)
    if(prod){
        res.status(200).send(prod)
    }else{
        res.status(404).send('Producto no encontrado')
    }
})

cartRoutes.put('/updateProd/:id', async (req, res) => {
    const { id } = req.params
    const confirm = await cartManager.updateProductById(id, req.body)
    if(confirm === true){
        res.status(200).send('Producto actualizado')
    }else{
        res.status(404).send('Producto no encontrado')
    }
})

cartRoutes.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    const confirm = await productManager.deleteProductById(id)

    if(confirm === true){
        res.status(200).send('Producto eliminado')
    }else{
        res.status(404).send('Producto no encontrado')
    }
})

export default cartRoutes
import express from 'express'
import { engine } from 'express-handlebars'
import { __dirname } from './path.js'
import routerHome from './routes/index.routes.js'
import prodRoutes from './routes/products.routes.js'
import cartRoutes from './routes/cart.routes.js'
import { Server } from "socket.io"
import { createServer } from 'node:http';
import dataBase from './dao/db/index.js'
import { ChatManagerMongo } from './dao/db/ManagerMongo/chatManager.js'
import { ProductManagerMongo } from './dao/db/ManagerMongo/productManager.js'
import { log } from 'node:console'

const chatManager = new ChatManagerMongo()
const productManager = new ProductManagerMongo()

const app = express()
const server = createServer(app);
const PORT = 8080 || process.env.PORT
app.use(express.json())

let msjs = []

//PUBLIC
app.use(express.static(__dirname+'/public'))


//ENGINE
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

//ROUTES
app.use('/api', routerHome)
app.use('/api/prod', prodRoutes)
app.use('/api/cart', cartRoutes)

const io = new Server(server)





io.on('connection', (socket) => {
    console.log('User Connected');
    
    socket.on('msjNuevo', async (data) => {
        await chatManager.addMsj(data)
        io.sockets.emit('msjChat', await chatManager.allMsj())
        //msjs.push(data)
        //io.sockets.emit('msjChat', msjs)
    })

    let allProds = async () => {
        socket.emit('prods', await productManager.allProduct())
    }
    allProds()
})



















server.listen(PORT, () => {
    console.log('Server running on port: ', PORT);
    dataBase.connect()
})
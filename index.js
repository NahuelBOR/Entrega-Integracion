import express from 'express'
import { engine } from 'express-handlebars'
import { __dirname } from './path.js'
import routerHome from './routes/index.routes.js'
import { Server } from "socket.io"
import { createServer } from 'node:http';
import { log } from 'node:console'

const app = express()
const server = createServer(app);
const PORT = 8080 || process.env.PORT

let msjs = []

//PUBLIC
app.use(express.static(__dirname+'/public'))


//ENGINE
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

//ROUTES
app.use('/api', routerHome)

const io = new Server(server)

io.on('connection', (socket) => {
    console.log('User Connected');
    
    socket.on('msjNuevo', (data) => {
        msjs.push(data)
        io.sockets.emit('msjChat', msjs)
    })
})



















server.listen(PORT, () => {
    console.log('Server running on port: ', PORT);
})
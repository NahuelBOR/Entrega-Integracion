import express from 'express'
import { engine } from 'express-handlebars'
import { __dirname } from './path.js'
import routerHome from './routes/index.routes.js'

const app = express()
const PORT = 8080

app.use(express.static(__dirname+'/public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

app.use('/api', routerHome)




















app.listen(PORT, () => {
    console.log('Server running on port: ', PORT);
})
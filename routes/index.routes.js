import { Router } from "express";

const routerHome = Router()


routerHome.get('/chat', (req, res) => {
    res.render('home', {})
})















export default routerHome
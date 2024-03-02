import mongoose from 'mongoose';  
//const mongoose = require('mongoose');

const dataBase = {
    //connetion: null,
    connect: () => {
        return mongoose.connect("mongodb+srv://elnau94:necochea53@cluster0.cn8xroo.mongodb.net/ecomerce")
        .then(() => {
            console.log('Base de Datos Conectada');
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default dataBase

/*module.exports = {
    connetion: null,
    connect: () => {
        return mongoose.connect("mongodb+srv://elnau94:necochea53@cluster0.cn8xroo.mongodb.net/ecomerce")
        .then(() => {
            console.log('Base de Datos Conectada');
        }).catch((err) => {
            console.log(err);
        })
    }
}*/
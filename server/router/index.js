const route = require('express').Router();

//creando rutas principales de la app
route.get('/', (req, res)=>{
       res.send('hello world from router express');
});

module.exports =  route;
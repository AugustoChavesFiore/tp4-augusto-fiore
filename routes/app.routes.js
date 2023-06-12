const express=require('express');
const routes=express.Router();
const controller=require('../controllers/controller.js'); //rutas del controlador

routes.get('/',controller.vistaGet);

routes.post('/',controller.vistaPost);

routes.put('/',controller.vistaPut);

routes.delete('/',controller.vistaDelete);

module.exports=routes;//exportas las rutas
import express from 'express'
import ControllerLibros from '../controller/controllerLibros.js'

class RouterLibros{
    constructor(){
        this.controllerLibros = new ControllerLibros()
    }

    start(){
        const router = express.Router()
        router.get('/:id?',this.controllerLibros.obtenerLibros)
        router.post('/',this.controllerLibros.guardarLibro)
        router.put('/:id',this.controllerLibros.actualizarLibro)
        router.delete('/:id',this.controllerLibros.borrarLibro)

        return router
    }
}



export default RouterLibros
import express from 'express'
import ControllerLibros from '../controllers/controllerLibros.js'

class RouterLibros{
    constructor(){
        this.controllerLibros = new ControllerLibros()
    }

    start(){
        const router = express.Router()
        router.get('/',this.controllerLibros.getAllLibros)
        router.get('/:id',this.controllerLibros.getLibroById)
        router.post('/',this.controllerLibros.createLibro)
        router.put('/:id',this.controllerLibros.updateLibro)
        router.delete('/:id',this.controllerLibros.deleteLibro)

        return router
    }
}



export default RouterLibros
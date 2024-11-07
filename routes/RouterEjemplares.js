import express from 'express'
import ControllerEjemplares from '../controllers/ControllerEjemplares.js'

class RouterEjemplares{
    constructor(){
        this.controllerEjemplares = new ControllerEjemplares()
    }

    start(){
        const router = express.Router()
        router.get('/',this.controllerEjemplares.getAllEjemplares)
        router.get('/:id',this.controllerEjemplares.getEjemplarById)
        router.post('/',this.controllerEjemplares.createEjemplar)
        router.put('/:id',this.controllerEjemplares.updateEjemplar)
        router.delete('/:id',this.controllerEjemplares.deleteEjemplar)

        return router
    }
}



export default RouterEjemplares
import ServicioEjemplares from "../services/ServicioEjemplares.js";

class ControllerEjemplares{
    constructor(){
        this.servicioEjemplares = new ServicioEjemplares()
    }
    getAllEjemplares = async(req,res)=>{
        try{
            const ejemplares = await this.servicioEjemplares.getAllEjemplaresService()
            res.status(200).send({success:true,message:ejemplares})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }
    }
    getEjemplarById = async(req,res)=>{
        try{
            const{id} = req.params
            const ejemplar = await this.servicioEjemplares.getEjemplarByIdService(id)
            res.status(200).send({success:true,message:ejemplar})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }
    }
    
    createEjemplar = async(req,res)=>{
        try{
            const {editorial,anio,LibroId} = req.body
            const ejemplarGuardado = await this.servicioEjemplares.createEjemplarService(editorial,anio,LibroId)
            res.status(200).send({success:true,message:ejemplarGuardado})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }
    }
    
    updateEjemplar = async(req,res)=>{
        try{
            const{id} = req.params
            const {editorial,anio} = req.body
            const ejemplarActualizado = await this.servicioEjemplares.updateEjemplarService(id,editorial,anio)
            res.status(200).send({success:true,message:ejemplarActualizado})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }
    }
    
    deleteEjemplar = async(req,res)=>{
        try{
            const{id} = req.params
            const ejemplar = await this.servicioEjemplares.deleteEjemplarService(id)
            res.status(200).send({success:true,message:ejemplar})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }

}
}

export default ControllerEjemplares
import ServicioLibros from "../services/ServicioLibros.js";

class ControllerLibros{
    constructor(){
        this.servicioLibros = new ServicioLibros()
    }
    getAllLibros = async(req,res)=>{
        try{
            const libros = await this.servicioLibros.getAllLibrosService()
            res.status(200).send({success:true,message:libros})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }
    }

    getLibroById = async(req,res)=>{
        try{
            const{id} = req.params
            const libro = await this.servicioLibros.getLibroByIdService(id)
            res.status(200).send({success:true,message:libro})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }
    }
    
    createLibro = async(req,res)=>{
        try{
            const {titulo,autor,anio} = req.body
            const libroGuardado = await this.servicioLibros.createLibroService(titulo,autor,anio)
            res.status(200).send({success:true,message:libroGuardado})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }
    }
    
    updateLibro = async(req,res)=>{
        try{
            const{id} = req.params
            const {titulo,autor,anio} = req.body
            const libroActualizado = await this.servicioLibros.updateLibroService(id,titulo,autor,anio)
            res.status(200).send({success:true,message:libroActualizado})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }
    }
    
    deleteLibro = async(req,res)=>{
        try{
            const{id} = req.params
            const libro = await this.servicioLibros.deleteLibroService(id)
            res.status(200).send({success:true,message:libro})
        }catch(error){
            res.status(400).send({success:false,message:error.message})
        }

}
}

export default ControllerLibros
import ServicioLibros from "../service/servicioLibros.js";

class ControllerLibros{
    constructor(){
        this.servicioLibros = new ServicioLibros()
    }
    obtenerLibros = (req,res)=>{
        const{id} = req.params;
        const libros = this.servicioLibros.obtenerLibros(id)
        res.json(libros)
    }
    
    guardarLibro = (req,res)=>{
        const libro = req.body
        const libroGuardado = this.servicioLibros.guardarLibro(libro)
        res.json(libroGuardado)
    }
    
    actualizarLibro = (req,res)=>{
        const libro = req.body
        const {id} = req.params
        const libroActualizado = this.servicioLibros.actualizarLibro(libro,id)
        res.json(libroActualizado)
    }
    
    borrarLibro = (req,res)=>{
        const{id} = req.params
        const libroEliminado = this.servicioLibros.borrarLibro(id)
        res.json(libroEliminado)

}
}

export default ControllerLibros
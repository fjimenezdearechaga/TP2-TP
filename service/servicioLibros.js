import ModeloLibros from "../model/modeloLibros.js"

class ServicioLibros{
    constructor(){
        this.modeloLibros = new ModeloLibros()
    }
    obtenerLibros = (id)=>{
        if(id){
            const libro = this.modeloLibros.obtenerLibro(id)
            return libro        
        }else{
            const libros = this.modeloLibros.obtenerLibros()
            return libros
        }
    }
    guardarLibro = (libro)=>{
        const libroGuardado = this.modeloLibros.guardarLibro(libro)
        return libroGuardado
    }
    actualizarLibro = (libro,id)=>{
        const libroActualizado = this.modeloLibros.actualizarLibro(libro,id)
        return libroActualizado
    }
    borrarLibro = (id)=>{
        const libroEliminado = this.modeloLibros.borrarLibro(id)
        return libroEliminado
    }


}


export default ServicioLibros
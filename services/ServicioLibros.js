import {Libro} from "../models/index.js"

class ServicioLibros{

    getAllLibrosService = async()=>{
        try{
            const libros = await Libro.findAll({
                attributes:['titulo','autor']
            })
            return libros
        }catch(error){
            throw error;
        }
    }
    getLibroByIdService = async(id)=>{
        try{
            const libro = await Libro.findByPk(id)
            return libro
        }catch(error){
            throw error;
        }
    }
    createLibroService = async(titulo,autor,anio)=>{
        try{
            console.log(titulo,autor,anio)
            const libro = await Libro.create({titulo,autor,anio})
            return libro;
        }catch(error){
            throw error;
        }
    }
    updateLibroService = async(id,titulo,autor,anio)=>{
        try{
            const libro = await Libro.update({titulo,autor,anio},{where:{id}})
            return libro;
        }catch(error){
            throw error;
        }
    }
    deleteLibroService = async(id)=>{
        try{
            const libro = await Libro.destroy({where:{id}})
            return libro
        }catch(error){
            throw error;
        }
    }


}


export default ServicioLibros
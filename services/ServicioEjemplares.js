import {Ejemplar} from "../models/index.js"
import Libro from "../models/Libro.js"

class ServicioEjemplares{

    getAllEjemplaresService = async()=>{
        try{
            const ejemplares = await Ejemplar.findAll({
                attributes:['editorial','anio'],
                include:[{model:Libro,attributes:['titulo','autor']}]
            })
            return ejemplares
        }catch(error){
            throw error;
        }
    }


    getEjemplarByIdService = async(id)=>{
        try{
            const ejemplar = await Ejemplar.findByPk(id)
            return ejemplar
        }catch(error){
            throw error;
        }
    }
    createEjemplarService = async(editorial,anio,LibroId)=>{
        try{
            const ejemplar = await Ejemplar.create({editorial,anio,LibroId})
            return ejemplar;
        }catch(error){
            throw error;
        }
    }
    updateEjemplarService = async(id,editorial,anio)=>{
        try{
            const ejemplar = await Ejemplar.update({editorial,anio,LibroId},{where:{id}})
            return ejemplar;
        }catch(error){
            throw error;
        }
    }
    deleteEjemplarService = async(id)=>{
        try{
            const ejemplar = await Ejemplar.destroy({
                where: {id},
              });
            return ejemplar;
        }catch(error){
            throw error;
        }
    }


}


export default ServicioEjemplares
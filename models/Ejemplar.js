import { DataTypes,Model } from "sequelize";
import connection from "../connection/connection.js";

class Ejemplar extends Model{}

Ejemplar.init({
    editorial:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    anio:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate: {
            min: -2000,
            max: 2024,
          }
    }
},{
    sequelize:connection,
    modelName:'Ejemplar',
    timestamps:false
})


export default Ejemplar
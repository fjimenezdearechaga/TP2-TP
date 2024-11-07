import { DataTypes,Model } from "sequelize";
import connection from "../connection/connection.js";

class Libro extends Model{}

Libro.init({
    titulo:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    autor:{
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
    modelName:'Libro',
    timestamps:false
})


export default Libro
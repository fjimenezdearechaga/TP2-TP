import { Sequelize } from 'sequelize';
import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASS, DB_USER } from '../config/config.js';

const connection = new Sequelize(DB_NAME,DB_USER,DB_PASS,{
    host: DB_HOST,
    dialect:DB_DIALECT,
})

try{
    await connection.authenticate();
    console.log('Connection has been established successfully')
}catch(error){
    console.log("error:",error)
}


export default connection
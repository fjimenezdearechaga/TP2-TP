import express from 'express'
import RouterLibros from './routes/routerLibros.js'
import RouterEjemplares from './routes/RouterEjemplares.js'
import { notFound } from './middleware/notFound.js'
import connection from './connection/connection.js'
import { SERVER_PORT } from './config/config.js'



const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/app/libros', new RouterLibros().start())
app.use('/app/ejemplares', new RouterEjemplares().start())

app.use(notFound)


await connection.sync()
const server = app.listen(SERVER_PORT,()=>{
    console.log(`Server express escuchando en: http://localhost:${SERVER_PORT} `)})

server.on('error',error=>{
    console.log(`Error en el servidor: ${error.message}`)
})
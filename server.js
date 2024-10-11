import express from 'express'
import RouterLibros from './router/routerLibros.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/app/libros', new RouterLibros().start())
const PORT = 8000

const server = app.listen(PORT,()=>{
    console.log(`Server express escuchando en: http://localhost:${PORT} `)})

server.on('error',error=>{
    console.log(`Error en el servidor: ${error.message}`)
})
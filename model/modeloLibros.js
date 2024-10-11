class ModeloLibros{
    
    constructor(){
        this.libros = [{id:"1",titulo:"las mil y una hojas",autor:"n/a"},
            {id:"2",titulo:"anna karenina",autor:"leon tolstoi"},
            {id:"3",titulo:"1984",autor:"george orwell"},
            {id:"4",titulo:"cuna de gato",autor:"kurt vonnegut"},
            {id:"5",titulo:"El libro de arena",autor:"jorge luis borges"}
        ]
    }
    
    obtenerLibros = ()=> this.libros
    obtenerLibro = (id)=>{
        const libro = this.libros.find((l)=>l.id===id)
        return libro||{} 
    }
    guardarLibro = (libro)=>{
        const id = String(parseInt(this.libros[this.libros.length-1]?.id||0) + 1)
        libro.id = id
        this.libros.push(libro)
        return libro
    }
    actualizarLibro = (libro,id)=>{
        const index = this.libros.findIndex((p)=>p.id===id)
        if(index!=-1){
            const libroViejo = this.libros[index]
            const libroActualizado = {...libroViejo,...libro}
            this.libros.splice(index,1,libroActualizado)
            return libroActualizado
        }else{
            return {}
        }
    }
    borrarLibro = (id)=>{
        const index = this.libros.findIndex((libro)=>libro.id===id)
        if(index!= -1){
            const libroEliminado = this.libros.splice(index,1)[0]
            return libroEliminado
        }else{
            return {}
        }
    }
    
    
}


export default ModeloLibros
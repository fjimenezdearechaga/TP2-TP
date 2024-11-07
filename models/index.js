import Libro from "./Libro.js";
import Ejemplar from "./Ejemplar.js";

Libro.hasMany(Ejemplar)
Ejemplar.belongsTo(Libro)

export {Libro,Ejemplar}
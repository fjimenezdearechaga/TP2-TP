Biblioteca App

Aplicacion hecha con Server Js para llevar a cabo un inventario de libros y de ejemplares de los libros de una biblioteca, usando como base de datos MySQL a través de Sequelize y XAMPP.

Para eso armé dos modelos Libro y Ejemplar (tablas relacionadas).

Los libros tienen los campos "titulo", "autor" y "anio".

Los ejemplares tienen los campos "editorial" y "anio".


Rutas:

LIBRO                                                             EJEMPLAR

GET all:'app/libros'                                              GET all:'app/ejemplares'

GET by Id:'app/libros/id'                                         GET by Id:'app/ejemplares/id'

POST:'app/libros'                                                 POST:'app/ejemplares'

PUT:'app/libros/id'                                               PUT:'app/ejemplares/id'

DELETE:'app/libros/id'                                            DELETE:'app/ejemplares/id'

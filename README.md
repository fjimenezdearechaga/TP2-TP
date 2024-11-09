Biblioteca App

Aplicacion hecha con Server Js para llevar a cabo un inventario de libros y de ejemplares de los libros de una biblioteca, usando como base de datos MySQL a través de Sequelize y XAMPP.
Para eso armé dos modelos Libro y Ejemplar (tablas relacionadas).
Los libros tienen los campos "titulo", "autor" y "anio".
Los ejemplares tienen los campos "editorial" y "anio".

Rutas:
Libro
GET all
'app/libros'
GET by Id
'app/libros/id'
POST
'app/libros'
PUT
'app/libros/id'
DELETE
'app/libros/id'

Ejemplar
GET all
'app/ejemplares'
GET by Id
'app/ejemplares/id'
POST
'app/ejemplares'
PUT
'app/ejemplares/id'
DELETE
'app/ejemplares/id'
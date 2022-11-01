
use Skate_planet;

CREATE TABLE categorias
(
    id_categorias INT primary key NOT NULL,
    nombre VARCHAR(30)
    
);

CREATE TABLE productos
(
    idProducto INT primary key NOT NULL,
    nombre VARCHAR(30),
    descripcion varchar(30),
    price varchar(30),
    image varchar(100),
    id_categorias  int(30),
    
     FOREIGN KEY(id_categorias) REFERENCES categorias(id_categorias)

) ;

CREATE TABLE usuarios
(
	idUsuario INT primary key NOT NULL,
    first_name VARCHAR(30) not null,
    last_name varchar(30) not null,
    email varchar(30) not null,
    passwird varchar(30) not null,
    image varchar(100)
) ;

CREATE TABLE productos_comprados
(
	id INT primary key NOT NULL,
    id_usuario int (30),
    id_productos int (30),
    
     FOREIGN KEY(id_usuario) REFERENCES usuarios(idUsuario),
      FOREIGN KEY(id_productos) REFERENCES productos(idProducto)
) ;



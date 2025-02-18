create database nodeApi;

use nodeApi;

create table usuario(
	id int primary key auto_increment, 
    nome varchar(200),
    data_criacao date
);

create table imagem(
	
    id int primary key auto_increment, 
    referencia varchar(300) unique, 
    data_criacao date,
    titulo varchar(200) 
);

create table usuario_imagem(
	id int primary key auto_increment, 
    ref_imagem varchar(300),
    id_usuario int,
    foreign key (ref_imagem)
    references imagem (referencia),
    foreign key (id_usuario) 
    references usuario (id)
)
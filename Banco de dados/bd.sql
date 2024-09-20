drop database if exists trilhaDoBrasil;
create database trilhaDoBrasil; /* criar base de dados */
use trilhaDoBrasil; 

/*Tabela dos professores*/
CREATE TABLE tb_professor 
( 
    idProfessor INT NOT NULL AUTO_INCREMENT,  
    nome VARCHAR(45) NOT NULL,  
    profLogin VARCHAR(12) NOT NULL,
    profEmail VARCHAR(45) NOT NULL,  
    senha VARCHAR(15) NOT NULL,  
    UNIQUE (profLogin),
    PRIMARY KEY (idProfessor)
)ENGINE=InnoDB; 

/*Tabela do grupo, é sempre ligado a um professor responsável*/
CREATE TABLE tb_grupo 
( 
    idGrupo INT NOT NULL AUTO_INCREMENT,  
    senha VARCHAR(15) NOT NULL,  
    idProfessor INT NOT NULL, 
    PRIMARY KEY (idGrupo),
    CONSTRAINT FK_GRUPO_PROFESSOR FOREIGN KEY(idProfessor) REFERENCES tb_professor (idProfessor)
)ENGINE=InnoDB; 

/*Tabela dos alunos, é sempre ligado a um grupo*/
CREATE TABLE tb_aluno 
( 
    idAluno INT NOT NULL AUTO_INCREMENT,  
    nome VARCHAR(45) NOT NULL,  
    alunoLogin VARCHAR(12) NOT NULL,
    alunoEmail VARCHAR(45) NOT NULL,
    senha VARCHAR(15) NOT NULL,  
    idGrupo INT NOT NULL,  
    UNIQUE (alunoLogin),
    PRIMARY KEY (idAluno),
    CONSTRAINT FK_ALUNO_GRUPO FOREIGN KEY(idGrupo) REFERENCES tb_grupo (idGrupo)
)ENGINE=InnoDB; 

/*Tabela de escolhas possíveis feitas no jogo.*/
CREATE TABLE tb_escolhas 
( 
    idEscolhas INT NOT NULL AUTO_INCREMENT,  
    descricao VARCHAR(50) NOT NULL,  
    PRIMARY KEY (idEscolhas)
)ENGINE=InnoDB; 

/*Tabela que relaciona os alunos com as escolhas que eles fazem*/
CREATE TABLE tb_escolhe 
( 
    idAluno INT NOT NULL,  
    idEscolhas INT NOT NULL,  
    ordemEscolha INT NOT NULL,
    PRIMARY KEY (idAluno, idEscolhas, ordemEscolha),
    CONSTRAINT FK_ESCOLHE_ALUNO FOREIGN KEY(idAluno) REFERENCES tb_aluno (idAluno),
    CONSTRAINT FK_ESCOLHE_ESCOLHAS FOREIGN KEY(idEscolhas) REFERENCES tb_escolhas (idEscolhas)
)ENGINE=InnoDB; 

/*Comando para contar quantos alunos fizeram a escolha x*/
/*select count(distinct idAluno) from tb_escolhe where idEscolhas = x*/
/*select count(distinct e.idAluno) from tb_escolhe e 
INNER JOIN tb_aluno a
on a.idAluno = e.idAluno
where e.idEscolhas = 1 and a.idGrupo = 1
Para um grupo específico*/
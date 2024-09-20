use trilhaDoBrasil

INSERT INTO tb_professor (nome, profLogin,senha,profEmail) VALUES ("Carlos", "Carlos123", "123","professor@gmaiu.com");
INSERT INTO tb_professor (nome, profLogin,senha,profEmail) VALUES ("Valéria", "Val2000", "12345","professora@gmaiu.com");
INSERT INTO tb_grupo (senha,idProfessor) VALUES ("grupo",1);
INSERT INTO tb_aluno(nome,alunoLogin,senha,idGrupo,alunoEmail) VALUES ("Caio","caio666","1010",1,"aluno@gmaiu.com");
INSERT INTO tb_aluno(nome,alunoLogin,senha,idGrupo,alunoEmail) VALUES ("Laura","laura12","1010",1,"aluna@gmaiu.com");
INSERT INTO tb_escolhas(descricao) VALUES ("Escolha 1");
INSERT INTO tb_escolhas(descricao) VALUES ("Escolha 2");
INSERT INTO tb_escolhas(descricao) VALUES ("Escolha 3");
INSERT INTO tb_escolhas(descricao) VALUES ("Escolha 4");
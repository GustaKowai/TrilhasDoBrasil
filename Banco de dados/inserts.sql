use trilhaDoBrasil

INSERT INTO tb_professor (nome, profLogin,senha,profEmail) VALUES ("Carlos", "Carlos123", "123","professor@gmaiu.com");
INSERT INTO tb_professor (nome, profLogin,senha,profEmail) VALUES ("Valéria", "Val2000", "12345","professora@gmaiu.com");
INSERT INTO tb_grupo (senha,nomeTurma,idProfessor) VALUES ("grupo1","Primeiro ano",1);
INSERT INTO tb_grupo (senha,nomeTurma,idProfessor) VALUES ("grupo2","Segundo ano",1);
INSERT INTO tb_grupo (senha,nomeTurma,idProfessor) VALUES ("grupo3","Terceiro ano",1);
INSERT INTO tb_grupo (senha,nomeTurma,idProfessor) VALUES ("grupo1","Primeiro ano",2);
INSERT INTO tb_grupo (senha,nomeTurma,idProfessor) VALUES ("grupo2","Segundo ano",2);
INSERT INTO tb_grupo (senha,nomeTurma,idProfessor) VALUES ("grupo3","Terceiro ano",2);
INSERT INTO tb_aluno(nome,alunoLogin,senha,idGrupo,alunoEmail) VALUES ("Caio","caio666","1010",1,"aluno@gmaiu.com");
INSERT INTO tb_aluno(nome,alunoLogin,senha,idGrupo,alunoEmail) VALUES ("Laura","laura12","1010",1,"aluna@gmaiu.com");
INSERT INTO tb_escolhas(descricao) VALUES ("Escolha 1");
INSERT INTO tb_escolhas(descricao) VALUES ("Escolha 2");
INSERT INTO tb_escolhas(descricao) VALUES ("Escolha 3");
INSERT INTO tb_escolhas(descricao) VALUES ("Escolha 4");
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
INSERT INTO tb_aluno(nome,alunoLogin,senha,idGrupo,alunoEmail) VALUES ("Bruno","bruno12","1010",1,"aluna@gmaiu.com");
INSERT INTO tb_aluno(nome,alunoLogin,senha,idGrupo,alunoEmail) VALUES ("Cesar","cesar12","1010",1,"aluna@gmaiu.com");
INSERT INTO tb_aluno(nome,alunoLogin,senha,idGrupo,alunoEmail) VALUES ("Claudio","claudio12","1010",1,"aluna@gmaiu.com");
INSERT INTO tb_aluno(nome,alunoLogin,senha,idGrupo,alunoEmail) VALUES ("Claudia","claudia12","1010",1,"aluna@gmaiu.com");
INSERT INTO tb_aluno(nome,alunoLogin,senha,idGrupo,alunoEmail) VALUES ("Felipe","felipe12","1010",1,"aluna@gmaiu.com");
INSERT INTO tb_escolhas(descricao) VALUES ("Resistência 1");
INSERT INTO tb_escolhas(descricao) VALUES ("Pessimismo 2");
INSERT INTO tb_escolhas(descricao) VALUES ("Aumenta moral 3");
INSERT INTO tb_escolhas(descricao) VALUES ("Aumenta força 4");
INSERT INTO tb_escolhas(descricao) VALUES ("Estratégia 5");
INSERT INTO tb_escolhas(descricao) VALUES ("Tentar dialogar 6");
INSERT INTO tb_escolhas(descricao) VALUES ("Atacar os agentes 7");
INSERT INTO tb_escolhas(descricao) VALUES ("Estratégia eficaz 8");
INSERT INTO tb_escolhas(descricao) VALUES ("Aumenta o risco 9");
INSERT INTO tb_escolhas(descricao) VALUES ("Ataque 10");
INSERT INTO tb_escolhas(descricao) VALUES ("Entregar tudo 11");
INSERT INTO tb_escolhas(descricao) VALUES ("Alternativa 12");
INSERT INTO tb_escolhas(descricao) VALUES ("Ficar alerta 13");
INSERT INTO tb_escolhas(descricao) VALUES ("Aumentar moral 14");
INSERT INTO tb_escolhas(descricao) VALUES ("Rumo a nova resistência 15");
INSERT INTO tb_escolhas(descricao) VALUES ("Statuos quo 16");
INSERT INTO tb_escolhas(descricao) VALUES ("Rumo a nova resistência 17");
INSERT INTO tb_escolhas(descricao) VALUES ("Statuos quo 18");
INSERT INTO tb_escolhe(idAluno,idEscolhas,ordemEscolha) VALUES("1","1","1");
INSERT INTO tb_escolhe(idAluno,idEscolhas,ordemEscolha) VALUES("1","3","2");
INSERT INTO tb_escolhe(idAluno,idEscolhas,ordemEscolha) VALUES("1","6","3");
INSERT INTO tb_escolhe(idAluno,idEscolhas,ordemEscolha) VALUES("1","7","4");
INSERT INTO tb_escolhe(idAluno,idEscolhas,ordemEscolha) VALUES("1","9","5");
INSERT INTO tb_escolhe(idAluno,idEscolhas,ordemEscolha) VALUES("1","10","6");
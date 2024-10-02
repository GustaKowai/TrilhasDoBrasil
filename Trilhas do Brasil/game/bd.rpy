#Tentativa de conectar diretamente do python com o banco de dados

default BD = "0"
init python:
    import mysql.connector
    #Cria a conexão com o banco de dados
    def conectabd(bancodedados):
        global BD
        mydb = mysql.connector.connect(
            user="root",
            password="",
            host="localhost",
            database=bancodedados,
            port=3306
        )
        return mydb

    #Checa a conexão com o banco de dados
    def checaConexao(bancodedados):
        mydb = conectabd(bancodedados)
        if mydb.is_connected():
            db_info = mydb.get_server_info()
            cursor = mydb.cursor()
            cursor.execute("select database();")
            linha = cursor.fetchone()
        return linha
    
    BD = checaConexao("trilhadobrasil")

    #Fazer o insert de dados:
    def insertIntoBD(bancodedados,nome,profLogin,senha):
        mydb = conectabd(bancodedados)
        cursor = mydb.cursor()
        sql = "INSERT INTO tb_professor (nome, profLogin,senha) VALUES (%s,%s,%s)"
        val = (nome,profLogin,senha)
        sucesso = "Falha"
        if mydb.is_connected():
            cursor = mydb.cursor()
            cursor.execute(sql,val)
            mydb.commit()
            cursor.close()
            mydb.close()
            sucesso = "A inserção no banco de dados",bancodedados,"foi um sucesso! A ID da inserção é a", cursor.lastrowid
        return sucesso,cursor.lastrowid

    #Faz o select da tabela professor
    def selectFromBD(bancodedados,coluna,tabela,alvo):
        mydb = conectabd(bancodedados)
        sql = "SELECT * FROM "+tabela+" WHERE "+coluna+"=%s"
        val = (alvo,)
        resultado = "0"
        if mydb.is_connected():
            cursor = mydb.cursor()
            cursor.execute(sql,val)
            resultado = cursor.fetchall()
            cursor.close()
            mydb.close()
        return resultado

    #Checa se o usuario existe e a senha correspondem
    def checkLogin(username,senha,tabela,coluna):
        resultado = selectFromBD("trilhadobrasil",coluna,tabela,username)
        if len(resultado)<1:
            resposta = 1
            resultadoID = 0
        else:
            resultado = resultado[0]
            resultadoID = resultado[0]
            resultadoNome = resultado[1]
            resultadoLogin = resultado[2]
            resultadoSenha = resultado[4]
            testeSenha = resultadoSenha
            if testeSenha == senha:
                resposta = resultadoNome
            else:
                resposta = 0
                resultadoID = 0

        return resposta,resultadoID

    #Função para a inserção da escolha do aluno no banco de dados
    def insertEscolhaIntoBD(bancodedados,alunoID,escolhaID):
        ordemEscolha = selectordemEscolha(alunoID) #Pega qual o número da última escolha feita pelo aluno
        ordemEscolha = ordemEscolha + 1
        mydb = conectabd(bancodedados)
        cursor = mydb.cursor()
        sql = "INSERT INTO tb_escolhe (idAluno, idEscolhas,ordemEscolha) VALUES (%s,%s,%s)"
        val = (alunoID,escolhaID,ordemEscolha)
        sucesso = "Falha"
        if mydb.is_connected():
            cursor = mydb.cursor()
            cursor.execute(sql,val)
            mydb.commit()
            cursor.close()
            mydb.close()
            sucesso = "A inserção no banco de dados",bancodedados,"foi um sucesso! A ID da inserção é a", cursor.lastrowid
        return ordemEscolha

    #Função para detectar quantas escolhas ja foram feitas pelo aluno
    def selectordemEscolha(alunoID):
        mydb = conectabd("trilhadobrasil")
        sql = "select * from tb_escolhe WHERE idAluno =%s ORDER BY ordemEscolha DESC LIMIT 0, 1"
        val = (alunoID,)
        resultado = "0"
        if mydb.is_connected():
            cursor = mydb.cursor()
            cursor.execute(sql,val)
            resultado = cursor.fetchall()
            cursor.close()
            mydb.close()
            if len(resultado)<1:
                ordemEscolha = 0
            else:
                resultado = resultado[0]
                ordemEscolha = resultado[2] #pega o valor da ordem escolha
        return ordemEscolha
        
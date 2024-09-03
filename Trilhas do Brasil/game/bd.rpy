#Tentativa de conectar diretamente do python com o banco de dados

define BD = "0"
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
        return sucesso

    def selectFromBD(bancodedados,idProfessor):
        mydb = conectabd(bancodedados)
        sql = "SELECT * FROM tb_professor WHERE idProfessor = %s"
        val = (idProfessor,)
        resultado = "0"
        if mydb.is_connected():
            cursor = mydb.cursor()
            cursor.execute(sql,val)
            resultado = cursor.fetchall()
            cursor.close()
            mydb.close()
        return resultado
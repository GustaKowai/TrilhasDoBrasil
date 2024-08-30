#Tentativa de conectar diretamente do python com o banco de dados

define BD = "0"
init python:
    import mysql.connector
    def conectabd(bancodedados):
        global BD
        mydb = mysql.connector.connect(
            user="root",
            password="",
            host="localhost",
            database=bancodedados,
            port=3306
        )
        if mydb.is_connected():
            db_info = mydb.get_server_info()
            cursor = mydb.cursor()
            cursor.execute("select database();")
            linha = cursor.fetchone()
        return linha
    BD = conectabd("trilhadobrasil")
        
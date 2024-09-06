# The script of the game goes in this file.

# Declare characters used by this game. The color argument colorizes the
# name of the character.

define e = Character("Eileen", image="eileen", callback = low_beep, what_prefix='', what_suffix='')

# The game starts here.

label start:
    # Show a background. This uses a placeholder by default, but you can
    # add a file (named either "bg room.png" or "bg room.jpg") to the
    # images directory to show it.

    scene bg room

    # This shows a character sprite. A placeholder is used, but you can
    # replace it by adding a file named "eileen happy.png" to the images
    # directory.

    show eileen happy
    e "Seja bem vindo ao jogo!!"
    jump fazerlogin

    e "Vamos fazer um login simples!"
    python:
        nomeConfirma = True
        usernameConfirma = True
        while nomeConfirma:
            nome = renpy.input("Qual é o seu nome completo?")
            nome = nome.strip()
            if len(nome)>0:
                nomeConfirma = False
            else:
                e("O seu nome não pode estar vazio.")
        while usernameConfirma:
            username = renpy.input("Qual o nome de usuário que deseja colocar?")
            username = username.strip()
            if len(username)>=5:
                usernameConfirma = False
            else:
                e("O nome de usuário deve ter pelo menos 5 caracteres.")
        confirma = True
        while confirma:
            senha = renpy.input("Qual senha deseja colocar?",mask="*")
            confirmasenha = renpy.input("Por favor, confirme a senha",mask="*")
            if confirmasenha == senha and senha:
                confirma = False
            else:
                e("A senha não coincidiu.")
    # These display lines of dialogue.

    e "Conectado ao banco de dados [BD]"
    #$ BD = checaConexao("teste")
    e "Conectado ao banco de dados [BD]"

    e "Vamos tentar fazer uma inserção no banco de dados..."
    $ teste,position = insertIntoBD("trilhadobrasil",nome,username,senha)
    e "[teste]"
    # This ends the game.
    $ resultado = selectFromBD("trilhadobrasil",'idProfessor',int(position))
    e "[resultado]"


label fazerlogin:
    e "Vamos agora tentar fazer o login!"
    e "Para isso, irei pedir que você digite o seu nome de usuário:"
    $ username = renpy.input("Nome de usuário:")
    $ senha = senha = renpy.input("Por favor, digite sua senha",mask="*")
    $ resposta = checkLogin(username,senha,"tb_aluno","alunoLogin")
    if resposta == 0:
        e "A senha não corresponde ao usuário."
        jump fazerlogin
    if resposta == 1:
        e "O usuário não foi encontrado no sistema"
        jump fazerlogin
    e "[resposta]"

    return
 
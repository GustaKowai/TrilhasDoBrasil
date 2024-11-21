define e = Character("Eileen", image="eileen", callback = low_beep, what_prefix='', what_suffix='')
define filipe = Character("Filipe dos Santos", image="Filipe dos Santos", callback = low_beep, what_prefix='', what_suffix='')
define minerador = Character("Minerador", image="Minerador", callback = low_beep, what_prefix='', what_suffix='')
define comerciante = Character("Comerciante", image="Comerciante", callback = low_beep, what_prefix='', what_suffix='')
define NPC = Character("NPC", image="NPC", callback = low_beep, what_prefix='', what_suffix='')
define NPC2 = Character("NPC2", image="NPC2", callback = low_beep, what_prefix='', what_suffix='')
define agente1 = Character("Agente da coroa", image="Agente da coroa", callback = low_beep, what_prefix='', what_suffix='')
define agente2 = Character("Agente da comandante", image="Agente da ccomandante", callback = low_beep, what_prefix='', what_suffix='')
define Cidadã = Character("Cidadã", image="Cidadã", callback = low_beep, what_prefix='', what_suffix='')
define conde = Character("Conde de assumar", image="Conde de assumar", callback = low_beep, what_prefix='', what_suffix='')
define escravo = Character("Escravo", image="Escravo", callback = low_beep, what_prefix='', what_suffix='')
default logado = False
define alunoID = 0
# O jogo começa aqui.
default ordemEscolha = 0

label start:
    scene bg room

    show eileen happy

    e "Seja bem vindo ao jogo!!"

    jump fazerlogin

#label de login no jogo
label fazerlogin:
    e "Vamos agora tentar fazer o login!"
    e "Para isso, irei pedir que você digite o seu nome de usuário:"
    $ username = renpy.input("Nome de usuário:")
    $ senha = renpy.input("Por favor, digite sua senha",mask="*")
    $ resposta, persistent.alunoID = checkLogin(username,senha,"tb_aluno","alunoLogin")
    if resposta == 0:
        e "A senha não corresponde ao usuário."
        jump fazerlogin
    if resposta == 1:
        e "O usuário não foi encontrado no sistema"
        jump fazerlogin
    $ persistent.nome = resposta
    e "O login foi executado! Seja bem vindo [persistent.nome]"
    hide eileen
    #$ ordemEscolha = selectordemEscolha(alunoID)
    #e "[ordemEscolha]"
    $ logado = True
    jump inicioHistoria
    jump testesDeEscolhas

label final:
    e "Espero que tenha se divertido."
    e "Até mais"
    
    jump inicioHistoria
    e "A historia acabou"
    
    return
 

 #label de testes do bd
label testesbd:
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
    $ resultado = selectFromBD("trilhadobrasil",'idProfessor',int(position))
    e "[resultado]"


#label para testar a inserção no banco de dados de escolhas.
label testesDeEscolhas:
    e "Agora, vamos testar a inserção de dados nas escolhas."
    e "Por favor, escolha o que quiser:"
    menu:
        "escolha1":
        #Essa é a linha que deverá ser adicionada abaixo de cada escolha, com o id da escolha sendo substituido pelo id da escolha indicada.
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,1)
        "escolha2":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,2)

    e "[ordemEscolha]"
    e "Vamos testar escolher de novo!"
    jump testesDeEscolhas
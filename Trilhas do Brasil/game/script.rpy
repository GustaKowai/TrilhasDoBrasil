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

    # These display lines of dialogue.

    e "Conectado ao banco de dados [BD]"
    $ BD = checaConexao("teste")
    e "Conectado ao banco de dados [BD]"

    e "Vamos tentar fazer uma inserção no banco de dados..."
    $ teste = insertIntoBD("trilhadobrasil","André","andre10","senha123")
    e "[teste]"
    # This ends the game.
    $ resultado = selectFromBD("trilhadobrasil")
    e "[resultado]"

    return

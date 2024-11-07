label inicioHistoria:
    show bg vilarica
    "Você observa o movimento frenético dos mineradores nas encostas. Entre eles, está Felipe dos Santos, seu personagem principal."



jump final



label guia:   
    show bg minas with dissolve
    show eileen happy with dissolve
    e "A história acontecerá aqui"
    n "O dia estava ensolarado"
    show eileen sad at left with move
    e "Eu não gosto de dias ensolarados"
    e "Você gosta de dias ensolarados?"
    menu:
        "Eu gosto!":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,3)
            jump gostosol
        "Eu não gosto.":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,4)
            jump naogostosol
    hide eileen with move

label gostosol:
    e "É mesmo??"
    show eileen happy at center with dissolve
    e "Que bom que está ensolarado então."
    jump final

label naogostosol:
    e "Então temos o mesmo gosto!"
    show eileen happy at truecenter with zoominout
    e "..."
    jump final
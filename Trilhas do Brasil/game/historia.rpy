label inicioHistoria:
    scene bg vilarica
    "Você observa o movimento frenético dos mineradores nas encostas. Entre eles, está Felipe dos Santos, seu personagem principal."

    show filipe happy at left 
    filipe "Mais um dia de trabalho que estamos terminando. Mas com essas casas de fundição que o governo está construindo, nosso trabalho será muito desvalorizado."

    show minerador sad at center with moveinright
    minerador "Com os impostos exigidos pela coroa portuguesa e aqueles agentes, todo esse ouro que pegamos não valerá muito."

    menu:
        "Temos que fazer algo, isto está um absurdo!":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,1)
            jump resistencia
        "O que podemos fazer?":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,2)
            jump pessimismo
label resistencia:
    minerador "concordo, não podemos aceitar isso. Temos nossas famílias para sustentar, com esses impostos não sobra o suficiente!"
    show minerador happy at center
    filipe "Precisamos de um plano, algo para mudar isso, o povo não pode sofrer assim. Vamos reunir mais pessoas e discutiremos o que faremos!"
    show filipe happy at left
    minerador "Vou passar em algumas lojas e lugares que conheço, vou falar que temos algo importante para falar, algo bom"
    filipe "Fale com o máximo de pessoas que conseguir. Avise que vamos nos encontrar no celeiro ao norte de minha fazenda, vamos nos encontrar, conversar sobre isso e tomar alguma atitude. Isso está me deixando revoltado"
    scene bg vilarica
jump cap1

label pessimismo:
    show filipe sad at left
    minerador "Não faço ideia, mas isso nos atrapalhará muito, com o que nos vai restar não vou conseguir sustentar minha família" 
    filipe "Podemos conversar com mais trabalhadores e mercantes, ver o que acham e quem sabe juntamos força"
    minerador "Vamos fazer isso, mas acho difícil que aceitem, a coroa é muito rígida e poderosa, somos só trabalhadores. penso que é perca de tempo"
    hide minerador with dissolve
    hide filipe with dissolve
    scene bg vilarica

label cap1:
    show bg salaescura
    "Você se junta a uma reunião secreta. O ambiente é carregado de descontentamento."
    show filipe default at center
    show NPC2 at left
    show comerciante at right
    filipe "Precisamos nos unir contra essa opressão! Não podemos mais aceitar a imposição das casas de fundição."
    filipe "Todo o ouro que pegamos em pepitas seremos obrigados a levar nas casas de fundição, onde os agentes da coroa derretem o ouro e transformam em barras."
    filipe "Porém a cada 5 barras de ouro 1 fica com a coroa e todas essas barras tem um selo que mostra que passaram pelas casas, só assim conseguimos comercializa-las."
    filipe "Precisamos ocupar toda vila rica"

    minerador "Além de pegarem uma grande parte do nosso ouro, os agentes da coroa ainda agem de má fé, tentando de alguma maneira roubar nosso ouro"
    minerador "eles fazem chantagem e ameaças, sem falar de quando roubam a força."

    comerciante "O que podemos fazer? A coroa nos controla e tem olhos em todo lugar."

    menu:
        "Vamos ser mais espertos com o santinho de pau oco, onde colocamos ouro em pó dentro de imagens de santos para passarmos pelos agentes sem precisar ter nosso ouro fiscalizado pelo governo":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,3)
            scene cap1
            jump aumentamoral

        "Precisamos de recurso para a nossa luta.":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,4)
            scene cap1
            jump aumentaforça

        "Podemos levar o ouro para a casa de fundição que está sendo construída, para vermos quantos agentes tem vigiado e a localização exata":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,5)
            scene cap1
            jump estrategia

label aumentamoral (count=2):
    show bg aumentamoral
    show filipe default at right with dissolve
    show comerciante default at center with dissolve
    show NPC default at left with dissolve

    filipe "Vamos tentar utilizar o santinho do pau oco"
    filipe "Vocês vão passar com esses santinhos pelos guardas e tentar salvar o máximo de ouro sem passar pelas casas de fundição que serão construídas, veremos se vai dar certo esse plano"

    comerciante "Vamos tentar, se conseguirmos voltaremos para avisar aos outros"

    "os dois comerciantes, com sua carroça, vão em direção a uma inspeção de mercadoria feita pelos agentes da coroa."
    hide comerciante with moveoutleft
    hide NPC with moveoutleft
    scene aumentamoral

    show bg carroça
    show comerciante happy at center with moveinright
    show NPC happy at right with moveinright
    show agente1 happy at left
    agente1 "Muito bem, o que vocês tem aqui ?"

    show comerciante sad at center
    show NPC sad at right

    agente1 "Algumas mercadorias, comidas, santinhos"
    agente1 "Parece haver algo dentro desses santinhos, o que é isso?"
    "Agente quebra um santinho e pepitas de ouro são espalhadas pelo chão"
    show agente1 santinho
    agente1 "Pensaram que iam nos enganar? hahahahaha"

    menu:
        "Desculpe-me senhor, mas todo o ouro que tivemos tanto trabalho para pegar seria tomado uma grande parte pela casa de fundição":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,6)
            jump tentardialogar

        "Não vamos deixar que roubem nosso ouro!!":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,6)
            jump atacar

label tentardialogar:
    agente1 "Não quero saber, vocês vão pagar por isso e ainda vamos ficar com todo esse ouro para nós"
    show agente1 saco
    show comerciante algema
    show NPC algema
    scene tentardialogar

    bg reuniao

    show filipe sad at right
    filipe "percebo que conseguiram reunir muitas pessoas para nos apoiar, mas venho com péssimas noticias"
    filipe "Nossa tentativa com o santinho do pau oco falhou, eles já estão espertos com isso. Nossos companheiros foram presos"
    show minerador happy at left
    minerador "Vamos continuar pensando, precisamos de mais recursos para o plano"
jump cap2final

label atacar
    show comerciante faca
    show NPC faca

    bg tela escura
    #sons de lutas

    bg comerciantesmortos
    scene atacar

    bg reuniao
    filipe "percebo que conseguiram reunir muitas pessoas para nos apoiar, mas venho com péssimas noticias"
    filipe "Nossa tentativa com o santinho do pau oco falhou, eles já estão espertos com isso. Nossos companheiros foram assassinado em tentativa de defender nosso ouro"
    filipe "Mas temos de continuar nosso plano"
    scene atacar
jump cap2

label aumentaforça
    bg discurso
    filipe happy at truecenter
    filipe "Companheiros! Hoje estamos aqui, não apenas como mineradores, mas como homens e mulheres dignos que lutam pela nossa liberdade e pelos direitos que nos foram negados!"
    filipe "Estamos sendo oprimidos, sufocados por impostos que não podemos pagar, enquanto nossas riquezas escorrem para os cofres da Coroa. É hora de nos levantarmos contra essa injustiça!"
    filipe "Unidos, somos mais fortes! Se cada um de nós se erguer, se cada um de nós clamar por nossa autonomia, não haverá poder que possa nos deter!"
    "ISSOO, VAMOS LUTAR POR JUSTIÇA"
    "JUSTIÇAAA"
    filipe "Vamos lutar contra o monopólio do comercio"
    filipe "E também vamos lutar contra as casas de fundição que o governo quer construir"

    Cidadã "Mas como vamos lutar contra as casas de fundição?"
    Cidadã "São muitos agentes da coroa que protegem a construção delas"

    filipe "Com a nossa força unida, nada vai nos deter, nem mesmo eles"
    filipe "Quem está comigo?
    "VAMOS A LUTAAA"
    "Será que vai dar certo?"
    scene aumenta força
jump cap2

label estrategia
    bg carroça
    show filipe happy at left
    show NPC2 happy at center
    filipe "Você segue com o plano enquanto eu e os outros vamos tentar recrutar mais apoiadores para nosso plano"
    hide filipe
    hide NPC2 with moveoutleft
    #Ilustração de uma carroça no fundo com algumas coisas e ouro em cima, os dois comerciantes indo em direção a uma inspeção feita pelos agentes
    
    Show agente1 happy at left
    show NPC2 happy at center with moveinright
    agente1 "Parado aí, o que temos ai?"
    NPC2 "Tenho mercadoria para comercializar e ouro tambem"
    agente1 "Esse ouro você vai levar a casa de fundição que está sendo construída, deixe la que será anotado e quando terminar a construção, seu ouro será derretido e carimbado, devolveremos ele a você"
    agente1 "Subindo a rua você verá a construção a frente"
    NPC2 "Certo, vamos lá."

    hide NPC2 with moveoutleft
    scene estrategia

    bg construção 
    show NPC2 happy at center with moveinright
    show agente1 default at left
    agente1 "Aqui vocês deixam o seu ouro, quando a casa estiver pronta, derreteremos, faremos barras e marcaremos seu ouro. Depois disso poderá comercializá-lo"
    #sons de trocas de itens

    show agente1 saco
    "O comerciante entrega o ouro, observando muito bem todos os agentes posicionadoe e armados, consegue ver tudo e juntar informações para passar ao outros"

    scene construção
    bg telaescura
    #sons de cavalo e rodas

    show filipe happy at right
    show NPC2 happy at center
    filipe "Você voltou, como foi?"
    NPC2 "Eu vi tudo, a localização e a quantidade de agentes lá. São bastante agentes, mas com todo o pessoal que estamos vendo que juntaram, vamos conseguir se formos espertos"
    


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
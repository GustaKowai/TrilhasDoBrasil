label inicioHistoria:
    scene bg vilarica
    "Você observa o movimento frenético dos mineradores nas encostas. Entre eles, está Felipe dos Santos, seu personagem principal."

    show filipe at left 
    filipe "Mais um dia de trabalho que estamos terminando. Mas com essas casas de fundição que o governo está implementando, nosso trabalho será muito desvalorizado."

    show minerador at center with moveinright #sad
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
    show filipe at left #happy
    minerador "Vou passar em algumas lojas e lugares que conheço, vou falar que temos algo importante para falar, algo bom"
    filipe "Fale com o máximo de pessoas que conseguir. Avise que vamos nos encontrar no celeiro ao norte de minha fazenda, vamos nos encontrar, conversar sobre isso e tomar alguma atitude. Isso está me deixando revoltado"
    scene bg vilarica
jump cap1

label pessimismo:
    show bg vilarica
    show filipe at left
    morador "Não faço ideia, mas isso nos atrapalhará muito, com o que nos vai restar não vou conseguir sustentar minha família" 
    filipe "Podemos conversar com mais trabalhadores e mercantes, ver o que acham e quem sabe juntamos força"
    morador "Vamos fazer isso, mas acho difícil que aceitem, a coroa é muito rígida e poderosa, somos só trabalhadores. penso que é perca de tempo"
    hide minerador with dissolve
    hide filipe with dissolve
    scene bg vilarica
jump cap1
label cap1:
    scene bg salaescura
    #imagem de uma sala escura com a silhueta de pessoas nela
    
    "Você se junta a uma reunião secreta. O ambiente é carregado de descontentamento."
    show filipe at center with dissolve
    show cidadao at left with dissolve
    show comerciante default at right with dissolve
    filipe "Precisamos nos unir contra essa opressão! Não podemos mais aceitar a imposição das casas de fundição."
    filipe "Todo o ouro que pegamos em pepitas seremos obrigados a levar nas casas de fundição, onde os agentes da coroa derretem o ouro e transformam em barras."
    filipe "Porém a cada cinco barras de ouro uma fica com a coroa! UM QUINTO de tudo que produzimos!" 
    filipe "E todas essas barras tem um selo que mostra que passaram pelas casas, só assim conseguimos comercializa-las..."
    filipe "Precisamos ocupar toda vila rica"

    cidadao "Além de pegarem uma grande parte do nosso ouro, os agentes da coroa ainda agem de má fé, tentando de alguma maneira roubar nosso ouro"
    cidadao "eles fazem chantagem e ameaças, sem falar de quando roubam a força."

    comerciante "O que podemos fazer? A coroa nos controla e tem olhos em todo lugar."

    menu:
        "Vamos ser mais espertos com o santinho de pau oco.":
            filipe "Vamos colocar o ouro em pó dentro de imagens de santos para passarmos pelos agentes sem precisar ter nosso ouro fiscalizado pelo governo"
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,3)
            jump aumentamoral

        "Precisamos de recurso para a nossa luta.":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,4)
            scene cap1
            jump aumentaforça

        "Podemos levar o ouro para a casa de fundição.":
            filipe "Veremos quantos agentes tem vigiando, a localização exata e montaremos a estratégia"
            cidadao "Perfeito"
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,5)
            scene cap1
            jump estrategia

label aumentamoral (count=2):
    cidadao "Concordo, vamos tentar isso"
    scene bg reuniao
    show filipe at right with dissolve
    show comerciante default at center with dissolve
    show cidadao at left with dissolve

    filipe "Vamos tentar utilizar o santinho do pau oco"
    filipe "Vocês vão passar com esses santinhos pelos guardas e tentar salvar o máximo de ouro sem passar pelas casas de fundição, veremos se vai dar certo esse plano"

    comerciante "Vamos tentar, se conseguirmos voltaremos para avisar aos outros"

    hide comerciante with moveoutleft
    hide cidadao with moveoutleft
    pause 1.0
    scene aumentamoral

    scene bg carroça
    "Os dois comerciantes juntam suas mercadorias e vão para a cidade tentar comercializar mas encontram uma inspeção feita pelos agentes da coroa."
    show comerciante default at center with moveinright #happy
    show cidadao at right with moveinright
    show agente1 at left
    agente1 "Muito bem, o que vocês tem aqui ?"

    show comerciante at center #sad
    show cidadao at right #sad

    agente1 "Algumas mercadorias, comidas, santinhos"
    agente1 "Parece haver algo dentro desses santinhos, o que é isso?"
    "O Agente quebra um santinho e pepitas de ouro são espalhadas pelo chão"
    show agente1 santinho
    #o personagem agente1 com um santinho na mão
    agente1 "Pensaram que iam nos enganar? hahahahaha"

    menu:
        "Desculpe-me senhor,podemos explicar.":
            comerciante "Mas todo o ouro que tivemos tanto trabalho para pegar, seria levado uma grande parte pela casa de fundição"
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,6)
            jump tentardialogar

        "Não vamos deixar que roubem nosso ouro!!":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,7)
            jump atacar

label tentardialogar:
    show bg carroça

    #imagem de uma carroça com itens dentro
    agente1 "Não quero saber, vocês vão pagar por isso e ainda vamos ficar com todo esse ouro para nós"
    show agente1 saco
    show comerciante #algema
    show cidadao #algema
    agente1 "Vou leva-los para a prisão"
    hide comerciante with moveoutleft
    hide cidadao with moveoutleft

    scene tentardialogar

    scene bg reuniao
    #imagem de um grupo de pessoas reunidas para ouvirem filipe falar

    show filipe at right #sad
    filipe "percebo que conseguiram reunir muitas pessoas para nos apoiar, mas venho com péssimas noticias"
    filipe "Nossa tentativa com o santinho do pau oco falhou, eles já estão espertos com isso. Nossos companheiros foram presos"
    show minerador happy at left
    minerador "Vamos continuar pensando, precisamos de mais recursos para o plano"
    scene tentardialogar
    jump cap2final

label atacar:
    show comerciante faca at center
    show morador faca at right
    show agente1 at left
    scene atacar

    scene bg telaescura
    play sound "audio/sons de lutas.mp3"
    "..."
    #sons de lutas

    scene bg comerciantesmortos
    ####### dois corpos no chão mortos e a carroça no fundo
    stop sound
    show agente1 at left
    agente1 "Patético"
    pause 1.0

    scene bg reuniao
    show filipe at center
    #imagem de um grupo de pessoas reunidas para ouvirem filipe falar
    filipe "percebo que conseguiram reunir muitas pessoas para nos apoiar, mas venho com péssimas noticias"
    filipe "Nossa tentativa com o santinho do pau oco falhou, eles já estão espertos com isso. Nossos companheiros foram assassinado em tentativa de defender nosso ouro"
    filipe "Mas temos de continuar nosso plano"
    scene atacar
    jump cap2

label aumentaforça:
    show bg discurso
    ######imagem de pessoas reunidas para ouvir um discurso
    show filipe at center
    play sound "audio/sons de murmurios.MP3"
    filipe "Companheiros! Hoje estamos aqui, não apenas como mineradores, mas como homens e mulheres dignos que lutam pela nossa liberdade e pelos direitos que nos foram negados!"
    filipe "Estamos sendo oprimidos, sufocados por impostos que não podemos pagar, enquanto nossas riquezas escorrem para os cofres da Coroa. É hora de nos levantarmos contra essa injustiça!"
    filipe "Unidos, somos mais fortes! Se cada um de nós se erguer, se cada um de nós clamar por nossa autonomia, não haverá poder que possa nos deter!"
    "ISSOO, VAMOS LUTAR POR JUSTIÇA"
    "JUSTIÇAAA"
    filipe "Vamos lutar contra o monopólio do comercio"
    filipe "E também vamos lutar contra as casas de fundição que o governo está implementando"
    stop sound
    cidada "Mas como vamos lutar contra as casas de fundição?"
    cidada "São muitos agentes da coroa que protegem as casas de fundição"

    filipe "Com a nossa força unida, nada vai nos deter, nem mesmo eles"
    filipe "Quem está comigo?"
    "VAMOS A LUTAAA"
    "Será que vai dar certo?"
    scene aumenta força
    jump cap2

label estrategia:
    scene bg carroça
    show filipe  at left
    show minerador at center
    filipe "Você segue com o plano enquanto eu e os outros vamos tentar recrutar mais apoiadores para nosso plano"
    hide filipe
    hide minerador with moveoutleft
    #Ilustração de uma carroça no fundo com algumas coisas e ouro em cima, os dois comerciantes indo em direção a uma inspeção feita pelos agentes
    
    show agente1 at left
    show minerador at center with moveinright
    agente1 "Parado aí, o que temos ai?"
    minerador "Tenho mercadoria para comercializar e ouro tambem"
    agente1 "Esse ouro você vai levar a casa de fundição mais a frente, deixe la que será calculado os impostos, seu ouro será derretido e carimbado, devolveremos ele a você"
    agente1 "Subindo a rua você verá a construção a frente"
    minerador "Certo, vamos lá."

    hide minerador with moveoutleft
    scene estrategia

    show bg casafundição 
    show minerador at center with moveinright
    show agente1 at left
    agente2 "Aqui vocês deixam o seu ouro, derreteremos, faremos barras, marcaremos seu ouro e pegaremos os impostos. Depois disso poderá comercializá-lo"
    #sons de trocas de itens
    show agente1 saco
    ###imagem do agente com um saco na mão#############
    "O comerciante entrega o ouro, observando muito bem todos os agentes posicionadoe e armados, consegue ver tudo e juntar informações para passar ao outros"
    pause 2.0

    scene construção
    show bg telaescura
    #sons de cavalo e rodas
    play sound "audio/sons de Cavalo e rodas.MP3"
    pause 2.0

    scene bg vilarica
    stop sound
    show filipe at right
    show minerador at center
    filipe "Você voltou, como foi?"
    minerador "Eu vi tudo, a localização e a quantidade de agentes lá. São bastante agentes, mas com todo o pessoal que estou vendo que juntaram, vamos conseguir se formos espertos"
    scene estrategia
    jump cap2

label cap2final:
    show bg telaescura
    play sound "audio/sons de marcha.MP3"
    #sons de multidão andando
    "Você e a população se reunem para atacar a casa de fundição, mas tambem decidirão uma estratégia para o ataque"

    show bg casafundição
    show filipe at right #angry
    filipe "Agora é a nossa hora! Vamos lutar por nossa liberdade!"
    filipe "Vamos atacar e ocupar vila rica"

    "Porém no meio da decisão da estratégia e do discurso de Filipe, aparecem vários agentes da coroa que estavam escondidos e armaram uma armadilha"

    show agente1 at left with moveinleft #happy
    show agente2  at center with moveinleft #happy

    agente2 "Pensaram que iam conseguir enganar a coroa assim?"
    agente2 "Que ridículo, prendam todos eles"

    #Sons de tristezas, gritos de socorro e cordas amarrando
    play sound "audio/sons de tristezas, gritos de socorro e cordas amarrando.MP3"

    filipe "Mas como? Como descobriram do nosso plano?"
    agente2 "HAHAHA, foi fácil. Nem precisamos usar muita força contra seus amigos comerciantes que eles já soltaram tudo"
    agente2 "Entregaram vocês e toda essa revolta ridícula"
    filipe "Traidores"
    agente2 "Prendam todos eles"
    stop sound

    play sound "audio/sons de algemas.mp3"
    #sons de algemas
    scene cap2final
    show bg telaescura
    filipe "Jurei morrer pela liberdade. Cumpro minha palavra."
    "Filipe e os outros foram capturados e levados. A revolta foi traída e não pode continuar, chegando assim ao fim da história."
    "Os abusos com impostos continuaram e o povo seguiu sofrendo com isso"
    pause 2.0
    stop sound
    jump final1

label cap2:
    show bg noite
    ###### imagem de pessoas juntas, casas no fundo na noite
    "Você se junta aos revoltosos para atacar a casa de fundição."
    show filipe at left #happy
    
    filipe "Agora é a nossa hora! Vamos lutar por nossa liberdade"
    filipe "Mas antes vamos decidir nossa estratégia"

    menu:
        "Dividir o grupo em duas frentes.":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,8)
            jump estrategiaeficaz

        "Atacar com tudo!":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,9)
            jump aumentarisco

label estrategiaeficaz:
    scene bg grupos
    #####imagem de dois grupos divididos para atacarem######
    "Ao amanhecer eles se dividem em dois grupos e tentam impedir que as casas de fundição de vila rica continuem operando, mas agentes da coroa estão no local"
    show filipe at left
    filipe "Vou com esse grupo e atacar os agentes e impedir a continuação dessa casa, o outro restante ataquem o grupo de agentes que fica a leste da casa de fundição"
    filipe"Boa sorte a todos"

    scene bg casafundição
    ###imagem de uma construção da casa de fundição######

    "O grupo de Filipe se prepara para o ataque"

    filipe "Ataquem"
    scene estrategiaeficaz

    show bg telaescura
    play sound "audio/sons de espadas, flechas e gritos.MP3"
    #sons de espadas, flechas e gritos
    pause 5.0

    scene bg vitoria
    stop sound
    ####imagens de agentes mortos e pessoas da revolta de pé
    show filipe at center
    "Filipe e alguns revoltos de pé e todos os agentes da coroa mortos"

    filipe "CONSEGUIMOS!"
    filipe "Vamos ajudar o outro grupo, depois recolhemos recursos que nos ajudarão, tratamos os feridos e pegamos os corpos da nossa gente"
    pause 2.0   

    scene bg vitoria
    show morador default at right
    show filipe at left with dissolve
    "Eles chegam a outra casa de fundição e encontram o outro grupo. Eles também derrotaram os agentes da coroa"

    morador "CONSEGUIMOS, VILA RICA AGORA É NOSSAAA!"
    filipe "Agora teremos de ir até a sede do governo e falar diretamente com o Conde de Assumar"
jump cap3estrategiaeficaz


label aumentarisco:
    scene bg grupo
    ####imagem do grupo pronto para a batalha########
    show filipe at left
    filipe "Vamos todos juntos atacar a casa de fundição, em maior número conquistaremos fácil todo o território"
    #sons de murmurios
    play sound "audio/sons de murmurios.MP3"
    "Todos os revoltados vão juntos a casa de fundição a oeste, porém alguns agentes avistam toda essa multidão gigante furiosa se movendo e comunicam mais agentes"
    pause 1.0
    stop sound
    scene bg agentes
    #####imagem de varios agentes da coroa no fundo#####
    "Quando Filipe e os revoltados chegam na casa de fundição encontram muitos agentes posicionados"
    show filipe at center #sad

    menu:
        "Viemos reivindicar nossos direitos, e daremos nossas vidas por isso, ATACARRR":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,10)
            jump ataque

        "Se render, eles nos encuralaram":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,11)
            jump entregartudo

        "Eles estão em muitos, não temos condições de ganhar. Vamos fugir":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,12)
            hide filipe with moveoutright
            jump alternativa

label ataque:
    scene bg telaescura
    play sound "audio/sons de gritos e batalha.mp3"
    pause 5.0
    #sons de gritos e batalha
    scene bg todosmortos
    #corpos dos participantes da revolta no chão, inclusive o de FIlipe dos Santos
    "Ao final da batalha todos os participantes da revolta forem mortos, inclusive Filipe dos Santos"
    pause 3.0
    stop sound

    show morador default at center
    morador "Todos morreram, vou fugir, nossa revolta foi um fracasso"
    hide morador with moveoutright
    "A revolta acaba com quase todos os participantes mortos, e toda a luta foi em vão"
    "A casa de fundição continuou com as atividades e o governo manteve os altos impostos e agora rígida vigilância nos cidadãos"
    jump final1

label entregartudo:
    show bg agentes
    show filipe at center #sad
    filipe "Nós nos rendemos, vocês nos pegaram"
    show filipe preso at center
    pause 2.0
    scene bg telaescura
    play sound "audio/sons de algemas.mp3"
    #sons de algemas
    "Todos os participantes da revolta são levados e presos"
    filipe "Jurei morrer pela liberdade. Cumpro minha palavra."
    "Fillipe dos santos, como o líder da revolta, é executado como uma forma de exemplo que a coroa passa a quem se opor a ela"
    pause 2.0
    jump final1

label alternativa:
    scene bg fuga
    play sound "audio/sons de corridas e gritos de medo.MP3"
    #####pessoas correndo no fundo######
    show filipe at center #angry
    filipe "VAMOS NOS REUNIR NOVAMENTE E BUSCAR OUTRA SOLUÇÃO"
    #sons de corridas e gritos de medo
    hide filipe with moveoutright

    "Alguns dos revoltos são mortos, mas a grande maioria consegue escapar e se esconder dos agentes"
    jump cap3alternativa

label cap3estrategiaeficaz:
    scene bg marcha
    #imagem da revolta marchando
    #sons de marcha e murmurio
    play sound "audio/sons de marcha.MP3"
    "A marcha avança para a sede do governo. O clima é tenso, mas esperançoso"
    show filipe at left 
    filipe "Vamos até o governador! Exigiremos o fim das casas de fundição"
    filipe "Exigiremos nossos direitos"
    hide filipe with moveinleft
    stop sound
    show bg rescinto
    #imagem de uma casa grande e luxuosa onde fica o governador, com pessoas da revolta em frente

    "A Revolta chega ao recinto aonde o conde se localiza"
    show filipe at right #angry
    show conde at left
    filipe "Conde, estamos aqui para exigir a diminuição dos impostos, o fim do monopólio, deixando que os produtos sejam comercializados por qualquer empresa, e contra as casas de fundição"
    filipe "Ocupamos vila rica e viemos direto a você fazer esse pedido"

    conde "Acalmem-se, acalmem-se"
    conde "Eu entendo todo esse alvoroço com os impostos e as casas de fundição. Estamos analisando e vamos atender o pedido do povo"
    conde "Prometo, as casas de fundição não serão instaladas e o comércio será livre de impostos!"
    #sons de comemoração
    play sound "audio/sons de comemoração.mp3"
    "O conde vendo que o povo agora comemora com o discurso, volta para seus aposentos"
    hide conde with moveoutleft

    filipe "Vamos voltar para Vila rica, parece que nossa revolta deu certo"
    pause 2.0
    stop sound
    menu:
        "Devemos desconfiar e nos preparar.":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,13)
            jump cap4ficaralerta

        "Vamos celebrar a vitória!":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,14)
            jump cap4aumentarmoral

label cap3alternativa:
    stop sound
    scene bg casafazenda
    ####imagem de uma casa isolada com pessoas no fundo
    show filipe at left #sad
    show escravo at center #sad
    filipe "Bom pessoal, tentamos fazer a revolta de igual para igual, mas falhamos"
    filipe "Agora temos que pensar e reunir forças para tentar novamente"

    escravo "Acho que tentar um ataque novamente é burrice, já tentamos e falhamos. Acho melhor desistir disso e aceitar que somos comandados pelo governo"
    filipe "Não podemos aceitar isso, temos que fazer algo, nem que custe nossas vida"
    show minerador at right
    minerador "Que tal ao invés de tentarmos atacar os agentes e evitar que as casas de fundição continuem, nós não vamos direto ao Conde de Assumar e falamos com ele"
    filipe "Acho nossa única chance, mas os agentes vão fazer de tudo para nos parar"
    jump cap4alternativacap3

label cap4alternativacap3:
    scene bg telaescura
    "Todos ficam apreensivos, mas esperançosos com a última chance"
    show bg rescinto
    show filipe at center
    filipe "Se acalmem, só vamos conversar com o conde, não viemos para lutar"

    "O conde vê o povo se aproximando e sai para conversar"
    show conde at left with moveinleft #happy

    conde "O que vieram fazer aqui depois daquela tentativa ridícula de ataque a casa de fundição?"
    filipe "Viemos conversar com o senhor, estamos aqui para pedir a diminuição dos impostos, o alívio no do monopólio, deixando que os produtos sejam comercializados por algumas outras empresas, e contra as casa de fundição"
    filipe "Isso vem atrapalhando muito a vida dos cidadaos e pedimos que o senhor nos ajude"

    conde "HAHAHAHA, vocês depois de tudo isso vem até aqui pedir tudo isso e esperam que eu vá ajudá-los?"
    conde "Guardas, prendam todos eles"   
    show agente1 paraesquerda at right with moveinright
    filipe "Não, você não pode fazer isso"
    conde "HAHAHAHAHAHAHA"
    scene cap4alternativacap3
    show bg telaescura
    play sound "sons de algemas e correria.mp3"
    #sons de algemas e correria
    play sound "audio/sons de algemas e correria.mp3"

    "Os guardas levam todos para prisão e a pedido do conde"
    "Filipe dos Santos é executado para ficar de exemplo para todos que pensarem em se voltar contra a coroa e suas decisões."
    pause 2.0
    stop sound
    jump final1

label cap4ficaralerta:
    scene bg vilaricafesta
    #####imagem de vila rica em comemoração, com pessoas comemorando####
    "No retorno, a euforia logo se transforma em desconfiança"
    show filipe at left with moveinleft
    filipe "Precisamos nos preparar. A coroa não ficará quieta. Não acho que aceitarão isso assim"
    filipe "Vamos ficar alerta para qualquer coisa e vigiar qualquer coisa estranha"
    hide filipe 
    hide bg vilarica
    show bg telaescura
    play sound "audio/sons de comemoração.mp3"
    #sons de comemorações
    "Toda a população de vila rica passa a noite comemorando e festejando o sucesso da revolta, mas alguns ainda ficam de guarda levantada e de olho em tudo"

    stop sound
    "mas ao amãnhecer..."
    play sound "audio/sons de cavalo no fundo.MP3"
    pause 2.0
    show bg vilaricasolnascendo
    #imagem de vila rica com o sol nascendo
    #sons de cavalo no fundo

    stop sound
    show morador faca at right
    #imagem de um morador com uma faca na mão
    show agente1 at center with moveinleft
    show agente2 at left with moveinleft
    "Os que ficaram alertas tentam combater as tropas de soldados, mas eles estão em menor número e a batalha dura pouco tempo"
    play sound "audio/sons de gritos e espadas.mp3"
    #sons de gritos e espadas
    "Mas o grupo acaba sendo os primeiros a morrer sem conseguir nem ao menos avisar os outros"
    scene cap4ficaralerta

    show bg telaescura
    "As tropas da coroa portuguesa invadem, predem e matam todos os participantes da revolta"
    "Filipe dos Santos é preso e como era um dos líderes, é levado separado pelos agentes"
    stop sound
    scene cap4ficaralerta

    show bg guardas
    #imagem com guardas e cavalos ao fundo
    show filipe preso at center 
    #Filipe com as mão e pés amarrados
    filipe "Nós lutamos por justiça"
    scene cap4ficaralerta
    
    show bg telaescura
    "Filipe dos Santos é morto e largado no meio de vila rica para ficar de exemplo para os demais"

    "A revolta de Filipe dos Santos não alcançou seus objetivos, lutaram bravamente até o fim, fazendo uma historia de orgulho e luta. A coroa portuguesa intensificou sua fiscalização"
    "E assim, a capitania de Minas Gerais foi criada para aumentar o controle sobre a região das minas."

    menu:
        "O que podemos aprender com isso?":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,15)
            jump final3

        "É o fim de nossa luta.":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,16)
            jump final2

label cap4aumentarmoral:
    scene bg vilaricafesta
    "Todos em Vila rica comemoram muito. Filipe dos Santos é tratado como herói e ovacionado"
    #sons de gritos ao fundo
    show filipe at left
    show cidada at center

    play sound "audio/sons de comemoração.mp3"
    cidada "Você conseguiu, vamos ter nossos direitos e conseguir viver melhor graças a você Filipe"
    filipe "Foi graça a todos nós que lutamos e fomos reivindicar nosso direito. Todos somos heróis e heroinas"
    filipe "Agora nossos trabalhos serão muito mais valorizados"
    scene cap4aumentarmoral

    show bg vilaricasolnascendo
    #imagem de vila rica com o sol nascendo
    "A população de Vila rica comemora a noite toda, mas ao nascer do sol..."
    pause 2.0
    stop sound

    show bg telaescura with dissolve
    play sound "audio/sons de gritos e espadas.mp3"
    #sons de gritos e espadas

    "Quando todos se dão conta, tropas da coroa já estão em vila rica prendendo e assassinando todos"
    show bg vilaricasolnascendo
    show filipe at left
    filipe "O que é isso?!{w} Fizemos um acordo com o conde"
    show agente1 at right with moveinleft
    agente1 "Vocês acharam mesmo que iam conseguir tudo isso"
    filipe "Desgraçados"

    show filipe at center with moveinleft
    show agente2 at left with moveinleft
    "Filipe tenta fugir, mas é cercado por agentes que o seguram e amarram-no"
    stop sound
    scene cap4aumentarmoral

    show bg guardas
    #imagem com guardas e cavalos ao fundo
    show filipe preso at center
    #Filipe com as mão e pés amarrados

    filipe "Lutamos por nossos direitos, isso não vai acabar assim"
    scene cap4aumentarmoral

    show bg telaescura
    filipe "Jurei morrer pela liberdade. Cumpro minha palavra."
    "Filipe é morto e deixado no meio de vila rica para exemplo aos demais"
    "A revolta de Filipe dos Santos não alcançou seus objetivos e foi facilmente enganada e derrotada. A coroa portuguesa intensificou sua fiscalização."

    "E assim, a capitania de Minas Gerais foi criada para aumentar o controle sobre a região das minas, a revolta mesmo sendo um grande ato de coragem dos cidadaos de Vila rica, foi um fracasso, mas foi um grande marco na história do Brasil"
    menu:
        "O que podemos aprender com isso?":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,17)
            jump final3

        "É o fim de nossa luta.":
            $ ordemEscolha = insertEscolhaIntoBD("trilhadobrasil",persistent.alunoID,18)
            jump final2

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
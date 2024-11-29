var chart = JSC.chart('chartDiv', {
  debug: true,
  type: 'organizational down',
  legend_visible: false,
  series: [
    {
      defaultPoint: {
        label: {
          text: '<b>%name</b><br> %ordem',
          autoWrap: true
        },
        connectorLine_color: '#747c72',
        annotation: {
          padding: 9,
          corners: [
            'cut',
            'square',
            'cut',
            'square'
          ],
          margin: [15, 5, 10, 0]
        },
        color: '#dcead7',
        tooltip:
          '<b>%name</b><br/><br/>%desc'
      },
      points: [
        {
          name: 'Prólogo',
          id: 'pr',
          color: 'black',
          attributes: {
            desc: 'Prólogo',
            ordem: ''
          }
        },
        {
          name: 'Resistêcia',
          id: '1',
          parent: 'pr',
          attributes: {
            desc: 'Temos que fazer algo!',
            ordem: ''
          }
        },
        {
          name: 'Pessimismo',
          id: '2',
          parent: 'pr',
          attributes: {
            desc: 'O que podemos fazer?',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 1',
          id: 'c1',
          color: 'black',
          parent: '1,2',
          attributes: {
            desc: 'A reunião secreta',
            ordem: ''
          }
        },
        {
          name: 'Rota do santinho',
          id: '3',
          parent: 'c1',
          attributes: {
            desc: 'Optam por usar os santinhos do pau oco',
            ordem: ''
          }
        },
        {
          name: 'Captar recursos',
          id: '4',
          parent: 'c1',
          attributes: {
            desc: 'Convocar mais pessoas',
            ordem: ''
          }
        },
        {
          name: 'Observar as casas de fundição',
          id: '5',
          parent: 'c1',
          attributes: {
            desc: 'Vocês optam pela estratégia de vigia',
            ordem: ''
          }
        },
        {
          name: 'Tentar dialogar',
          id: '6',
          parent: '3',
          attributes: {
            desc: 'Tentar dialogar com os agentes',
            ordem: ''
          }
        },
        {
          name: 'Atacar os agentes',
          id: '7',
          parent: '3',
          attributes: {
            desc: 'Lutar com os agentes',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 2',
          id: 'c2_v1',
          color: 'black',
          parent: '6',
          attributes: {
            desc: 'O ataque falha, vocês foram traídos',
            ordem: ''
          }
        },
        {
          name: 'Final ruim: Todos presos',
          id: 'f1',
          color: 'red',
          parent: 'c2_v1',
          attributes: {
            desc: '',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 2',
          id: 'c2_v2',
          color: 'black',
          parent: '7,4,5',
          attributes: {
            desc: 'Ataque a casa de fundição',
            ordem: ''
          }
        },
        {
          name: 'Dividir em duas frentes',
          id: '8',
          parent: 'c2_v2',
          attributes: {
            desc: 'Vocês tentam usar uma estratégia',
            ordem: ''
          }
        },
        {
          name: 'Atacar com tudo',
          id: '9',
          parent: 'c2_v2',
          attributes: {
            desc: 'Enfrentar a coroa com tudo',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 3',
          id: 'c3_v1',
          color: 'black',
          parent: '8',
          attributes: {
            desc: 'Exigir o fim das casas de fundição',
            ordem: ''
          }
        },
        {
          name: 'Atacar',
          id: '10',
          parent: '9',
          attributes: {
            desc: 'Lutar com os agentes da coroa',
            ordem: ''
          }
        },
        {
          name: 'Se render',
          id: '11',
          parent: '9',
          attributes: {
            desc: 'Se entregar ao ver que estão em desvantagem',
            ordem: ''
          }
        },
        {
          name: 'Fugir',
          id: '12',
          parent: '9',
          attributes: {
            desc: 'Escapar com vida para tentar de novo depois',
            ordem: ''
          }
        },
        {
          name: 'Final ruim: Todos mortos',
          id: 'f2',
          color: 'red',
          parent: '10',
          attributes: {
            desc: '',
            ordem: ''
          }
        },
        {
          name: 'Final ruim: Todos presos, Filipe morto',
          id: 'f3',
          color: 'red',
          parent: '11',
          attributes: {
            desc: '',
            ordem: ''
          }
        },
        {
          name: 'Capitulo 3',
          id: 'c3_v2',
          color: 'black',
          parent: '12',
          attributes: {
            desc: 'Tentativa de conversar com o conde',
            ordem: ''
          }
        },
        {
          name: 'Final ruim: Filipe morto',
          id: 'c4',
          color: 'red',
          parent: 'c3_v2',
          attributes: {
            desc: '',
            ordem: ''
          }
        },
        {
          name: 'Ficar alerta',
          id: '13',
          parent: 'c3_v1',
          attributes: {
            desc: 'Ficar atento mesmo com a aceitação do Conde',
            ordem: ''
          }
        },
        {
          name: 'Comemorar',
          id: '14',
          parent: 'c3_v1',
          attributes: {
            desc: 'Festejar a vitória',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 4',
          id: 'c4_v1',
          parent: '13',
          color: 'black',
          attributes: {
            desc: 'A celebração',
            ordem: ''
          }
        },
        {
          name: 'Ataque à Celebração 1',
          id: 'f4',
          parent: 'c4_v1',
          color: 'gold',
          attributes: {
            desc: 'Mesmo com os revoltosos atentos, a retaliação da coroa foi forte',
            ordem: ''
          }
        },
        {
          name: 'Rumo a nova resistência!',
          id: 'f5',
          parent: 'f4',
          color: 'gold',
          attributes: {
            desc: '',
            ordem: ''
          }
        },
        {
          name: 'Status Quo',
          id: 'f6',
          parent: 'f4',
          color: 'gold',
          attributes: {
            desc: '',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 4',
          id: 'c4_v2',
          parent: '14',
          color: 'black',
          attributes: {
            desc: 'A celebração',
            ordem: ''
          }
        },
        {
          name: 'Ataque à Celebração 2',
          id: 'celeb',
          parent: 'c4_v2',
          color: 'gold',
          attributes: {
            desc: 'Após a festa, a coroa ataca os revoltosos',
            ordem: ''
          }
        },
        {
          name: 'Rumo a nova resistência!',
          id: 'f7',
          parent: 'celeb',
          color: 'gold',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Status Quo',
          id: 'f8',
          parent: 'celeb',
          color: 'gold',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        }

      ]
    }
  ],
/*   toolbar: {
    defaultItem: {
      margin: 5,
      events_click: orientChart
    },
    items: {
      Left_icon: 'system/default/zoom/arrow-left',
      Right_icon:
        'system/default/zoom/arrow-right',
      Down_icon: 'system/default/zoom/arrow-down',
      Up_icon: 'system/default/zoom/arrow-up'
    },
  },
  toolbar_items: {
    "Update Points": {
      position: "top left",
      events_click: atualizar
    }
  } */
});

function atualizar(escolhas) {
  let chart = this.chart;
  chart.series(0).options({
    points: [
      {
        name: 'Prólogo',
        id: 'pr',
        color: 'black',
        attributes: {
          desc: 'Prólogo',
          ordem: ''
        }
      },
      {
        name: 'Resistêcia',
        id: '1',
        parent: 'pr',
        attributes: {
          desc: 'Temos que fazer algo!',
          ordem: escolhas[1]
        }
      },
      {
        name: 'Pessimismo',
        id: '2',
        parent: 'pr',
        attributes: {
          desc: 'O que podemos fazer?',
          ordem: escolhas[2]
        }
      },
      {
        name: 'Capítulo 1',
        id: 'c1',
        color: 'black',
        parent: '1,2',
        attributes: {
          desc: 'A reunião secreta',
          ordem: ''
        }
      },
      {
        name: 'Rota do santinho',
        id: '3',
        parent: 'c1',
        attributes: {
          desc: 'Optam por usar os santinhos do pau oco',
          ordem: escolhas[3]
        }
      },
      {
        name: 'Captar recursos',
        id: '4',
        parent: 'c1',
        attributes: {
          desc: 'Convocar mais pessoas',
          ordem: escolhas[4]
        }
      },
      {
        name: 'Observar as casas de fundição',
        id: '5',
        parent: 'c1',
        attributes: {
          desc: 'Vocês optam pela estratégia de vigia',
          ordem: escolhas[5]
        }
      },
      {
        name: 'Tentar dialogar',
        id: '6',
        parent: '3',
        attributes: {
          desc: 'Lutar com os agentes',
          ordem: escolhas[6]
        }
      },
      {
        name: 'Atacar os agentes',
        id: '7',
        parent: '3',
        attributes: {
          desc: 'Resistência 1',
          ordem: escolhas[7]
        }
      },
      {
        name: 'Capítulo 2',
        id: 'c2_v1',
        color: 'black',
        parent: '6',
        attributes: {
          desc: 'O ataque falha, vocês foram traídos',
          ordem: ''
        }
      },
      {
        name: 'Final ruim: Todos presos',
        id: 'f1',
        color: 'red',
        parent: 'c2_v1',
        attributes: {
          desc: '',
          ordem: ''
        }
      },
      {
        name: 'Capítulo 2',
        id: 'c2_v2',
        color: 'black',
        parent: '7,4,5',
        attributes: {
          desc: 'Ataque a casa de fundição',
          ordem: ''
        }
      },
      {
        name: 'Dividir em duas frentes',
        id: '8',
        parent: 'c2_v2',
        attributes: {
          desc: 'Vocês tentam usar uma estratégia',
          ordem: escolhas[8]
        }
      },
      {
        name: 'Atacar com tudo',
        id: '9',
        parent: 'c2_v2',
        attributes: {
          desc: 'Enfrentar a coroa com tudo',
          ordem: escolhas[9]
        }
      },
      {
        name: 'Capítulo 3',
        id: 'c3_v1',
        color: 'black',
        parent: '8',
        attributes: {
          desc: 'Exigir o fim das casas de fundição',
          ordem: ''
        }
      },
      {
        name: 'Atacar',
        id: '10',
        parent: '9',
        attributes: {
          desc: 'Lutar com os agentes da coroa',
          ordem: escolhas[10]
        }
      },
      {
        name: 'Entregar tudo',
        id: '11',
        parent: '9',
        attributes: {
          desc: 'Se entregar ao ver que estão em desvantagem',
          ordem: escolhas[11]
        }
      },
      {
        name: 'Fugir',
        id: '12',
        parent: '9',
        attributes: {
          desc: 'Escapar com vida para tentar de novo depois',
          ordem: escolhas[12]
        }
      },
      {
        name: 'Final ruim: Todos mortos',
        id: 'f2',
        color: 'red',
        parent: '10',
        attributes: {
          desc: '',
          ordem: ''
        }
      },
      {
        name: 'Final ruim: Todos presos, Filipe morto',
        id: 'f3',
        color: 'red',
        parent: '11',
        attributes: {
          desc: '',
          ordem: ''
        }
      },
      {
        name: 'Capitulo 3',
        id: 'c3_v2',
        color: 'black',
        parent: '12',
        attributes: {
          desc: 'Tentativa de conversar com o Conde',
          ordem: ''
        }
      },
      {
        name: 'Final ruim: Filipe morto',
        id: 'c4',
        color: 'red',
        parent: 'c3_v2',
        attributes: {
          desc: '',
          ordem: ''
        }
      },
      {
        name: 'Ficar alerta',
        id: '13',
        parent: 'c3_v1',
        attributes: {
          desc: 'Ficar atento mesmo com a aceitação do Conde',
          ordem: escolhas[13]
        }
      },
      {
        name: 'Comemorar',
        id: '14',
        parent: 'c3_v1',
        attributes: {
          desc: 'Festejar a vitória',
          ordem: escolhas[14]
        }
      },
      {
        name: 'Capítulo 4',
        id: 'c4_v1',
        parent: '13',
        color: 'black',
        attributes: {
          desc: 'A celebração',
          ordem: ''
        }
      },
      {
        name: 'Ataque à Celebração 1',
        id: 'f4',
        parent: 'c4_v1',
        color: 'gold',
        attributes: {
          desc: 'Mesmo com os revoltosos atentos, a retaliação da coroa foi forte',
          ordem: ''
        }
      },
      {
        name: 'Rumo a nova resistência!',
        id: 'f5',
        parent: 'f4',
        color: 'gold',
        attributes: {
          desc: '',
          ordem: escolhas[15]
        }
      },
      {
        name: 'Status Quo',
        id: 'f6',
        parent: 'f4',
        color: 'gold',
        attributes: {
          desc: '',
          ordem: escolhas[16]
        }
      },
      {
        name: 'Capítulo 4',
        id: 'c4_v2',
        parent: '14',
        color: 'black',
        attributes: {
          desc: 'A celebração',
          ordem: ''
        }
      },
      {
        name: 'Ataque à Celebração',
        id: 'celeb',
        parent: 'c4_v2',
        color: 'gold',
        attributes: {
          desc: 'Após a festa, a coroa ataca os revoltosos',
          ordem: ''
        }
      },
      {
        name: 'Rumo a nova resistência!',
        id: 'f7',
        parent: 'celeb',
        color: 'gold',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[17]
        }
      },
      {
        name: 'Status Quo',
        id: 'f8',
        parent: 'celeb',
        color: 'gold',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[18]
        }
      }

    ]
  });
}

function orientChart(direction) {
  chart.options({
    type: 'organizational ' + direction
  });
}
function random(max) {
  return Math.round(Math.random() * max);
}

function carregarEscolha(idAluno){
  var escolhas = [];
  for (i = 0; i < 19; i++){
    escolhas[i] = "";
  }
  dados = JSON.stringify({idAluno: idAluno});
  console.log(dados)
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function(){
      console.log(this.responseText);
      tabela = JSON.parse(this.responseText);
      console.log(tabela.length);
      if (tabela.length < 1){
        console.log("A escolha não é definida");
      }else{
        for (elemento of tabela){
          escolhas[elemento.idEscolhas] += "Escolha: " + elemento.ordemEscolha + "<br>"
        }
      }
      console.log(escolhas);
      atualizar(escolhas);
  }
  xmlhttp.open("POST","http://localhost/carregar_escolha.php");
      xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xmlhttp.send("dados="+dados);
      console.log("Chegou aqui");
      console.log(dados);
}

function NumeroEscolhaTurma(idEscolhas){
  let idGrupo = getCookie("turma");
  dados = JSON.stringify({idGrupo: idGrupo, idEscolhas: idEscolhas});
  console.log("NumeroEscolhaTurma"+dados)
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function(){
      console.log(this.responseText);
      tabela = JSON.parse(this.responseText);
      for (elemento of tabela){
        console.log("O número de escolhas foi de: "+elemento.Numero)
        resposta = elemento.Numero
        console.log("Elemento: "+ resposta)
        document.getElementById('Escolha'+idEscolhas).value = resposta
        document.getElementById('Escolha'+idEscolhas).innerText = resposta
      }
  }
  xmlhttp.open("POST","http://localhost/carregar_escolha_turma.php");
      xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xmlhttp.send("dados="+dados);
      console.log("Chegou aqui");
      console.log(dados);

}

function ComparaEscolhasTurma(Opcao1,Opcao2,Opcao3,Escolha){ 
  let escolha1 = document.getElementById('Escolha'+Opcao1).value;
  console.log("Escolha1 = " +escolha1)
  let escolha2 = document.getElementById('Escolha'+Opcao2).value;
  console.log("Escolha2 = " +escolha2)
  let escolha3 = document.getElementById('Escolha'+Opcao3).value;
  console.log("Escolha3 = " +escolha3)
  if (escolha1 == 0 && escolha2 == 0 && escolha3 == 0){
    porcentEscolha1 = 0
    porcentEscolha2 = 0
    porcentEscolha3 = 0
  }else{
    total = parseInt(escolha1) + parseInt(escolha2) + parseInt(escolha3)
    console.log(total)
    if (total == 0){total=parseInt(1)}
    porcentEscolha1 = 100*escolha1/total
    porcentEscolha2 = 100*escolha2/total
    porcentEscolha3 = 100*escolha3/total
  }
  if (Escolha == 1){
    console.log("A % da escolha 1 é: "+porcentEscolha1)
    return porcentEscolha1
  } else if (Escolha == 2){
    console.log("A % da escolha 2 é: "+porcentEscolha2)
    return porcentEscolha2
  }else{
    console.log("A % da escolha 3 é: "+porcentEscolha3)
    return porcentEscolha3
  }
}


function AtualizaTurma(){
  var escolha = [];
  for (i = 0; i < 19; i++){
    escolha[i] = "";
    NumeroEscolhaTurma(i);
  }
  escolha[1] = ComparaEscolhasTurma(1,2,0,1);
  escolha[2] = ComparaEscolhasTurma(1,2,0,2);
  escolha[3] = ComparaEscolhasTurma(3,4,5,1);
  escolha[4] = ComparaEscolhasTurma(3,4,5,2);
  escolha[5] = ComparaEscolhasTurma(3,4,5,3);
  escolha[6] = ComparaEscolhasTurma(6,7,0,1);
  escolha[7] = ComparaEscolhasTurma(6,7,0,2);
  escolha[8] = ComparaEscolhasTurma(8,9,0,1);
  escolha[9] = ComparaEscolhasTurma(8,9,0,2);
  escolha[10] = ComparaEscolhasTurma(10,11,12,1);
  escolha[11] = ComparaEscolhasTurma(10,11,12,2);
  escolha[12] = ComparaEscolhasTurma(10,11,12,3);
  escolha[13] = ComparaEscolhasTurma(13,14,0,1);
  escolha[14] = ComparaEscolhasTurma(13,14,0,2);
  escolha[15] = ComparaEscolhasTurma(15,16,0,1);
  escolha[16] = ComparaEscolhasTurma(15,16,0,2);
  escolha[17] = ComparaEscolhasTurma(17,18,0,1);
  escolha[18] = ComparaEscolhasTurma(17,18,0,2);
  console.log("Tabela de escolhas: "+escolha)
  atualizar(escolha)
}

function carregarBacknumber(){
  for (i = 0; i < 19; i++){
    NumeroEscolhaTurma(i);
  }
}
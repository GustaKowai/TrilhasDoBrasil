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
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Pessimismo',
          id: '2',
          parent: 'pr',
          attributes: {
            desc: 'Pessimismo 2',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 1',
          id: 'c1',
          color: 'black',
          parent: '1,2',
          attributes: {
            desc: 'Capítulo 1',
            ordem: ''
          }
        },
        {
          name: 'Aumenta moral',
          id: '3',
          parent: 'c1',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Aumenta força',
          id: '4',
          parent: 'c1',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Estratégia',
          id: '5',
          parent: 'c1',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Tentar dialogar',
          id: '6',
          parent: '3',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Atacar os agentes',
          id: '7',
          parent: '3',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 2',
          id: 'c2_v1',
          color: 'black',
          parent: '6',
          attributes: {
            desc: 'Versão 1 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Final ruim: Todos presos',
          id: 'f1',
          color: 'red',
          parent: 'c2_v1',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 2',
          id: 'c2_v2',
          color: 'black',
          parent: '7,4,5',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Estratégia eficaz',
          id: '8',
          parent: 'c2_v2',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Aumentar o risco',
          id: '9',
          parent: 'c2_v2',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 3',
          id: 'c3_v1',
          color: 'black',
          parent: '8',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Ataque',
          id: '10',
          parent: '9',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Entregar tudo',
          id: '11',
          parent: '9',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Alternativa',
          id: '12',
          parent: '9',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Final ruim: Todos mortos',
          id: 'f2',
          color: 'red',
          parent: '10',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Final ruim: Todos presos, Filipe morto',
          id: 'f3',
          color: 'red',
          parent: '11',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Capitulo 3',
          id: 'c3_v2',
          color: 'black',
          parent: '12',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 4',
          id: 'c4',
          color: 'red',
          parent: 'c3_v2',
          attributes: {
            desc: 'Resistência 1',
            ordem: ''
          }
        },
        {
          name: 'Ficar alerta',
          id: '13',
          parent: 'c3_v1',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Aumentar moral',
          id: '14',
          parent: 'c3_v1',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Capítulo 4',
          id: 'c4_v1',
          parent: '13',
          color: 'black',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Todos morrem, felipe preso e morto',
          id: 'f4',
          parent: 'c4_v1',
          color: 'gold',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Rumo a nova resistência!',
          id: 'f5',
          parent: 'f4',
          color: 'gold',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Status Quo',
          id: 'f6',
          parent: 'f4',
          color: 'gold',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
            ordem: ''
          }
        },
        {
          name: 'Celebração',
          id: 'celeb',
          parent: '14',
          color: 'gold',
          attributes: {
            desc: 'Versão 2 do capítulo 2',
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
          desc: 'Resistência 1',
          ordem: escolhas[1]
        }
      },
      {
        name: 'Pessimismo',
        id: '2',
        parent: 'pr',
        attributes: {
          desc: 'Pessimismo 2',
          ordem: escolhas[2]
        }
      },
      {
        name: 'Capítulo 1',
        id: 'c1',
        color: 'black',
        parent: '1,2',
        attributes: {
          desc: 'Capítulo 1',
          ordem: ''
        }
      },
      {
        name: 'Aumenta moral',
        id: '3',
        parent: 'c1',
        attributes: {
          desc: 'Resistência 1',
          ordem: escolhas[3]
        }
      },
      {
        name: 'Aumenta força',
        id: '4',
        parent: 'c1',
        attributes: {
          desc: 'Resistência 1',
          ordem: escolhas[4]
        }
      },
      {
        name: 'Estratégia',
        id: '5',
        parent: 'c1',
        attributes: {
          desc: 'Resistência 1',
          ordem: escolhas[5]
        }
      },
      {
        name: 'Tentar dialogar',
        id: '6',
        parent: '3',
        attributes: {
          desc: 'Resistência 1',
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
          desc: 'Versão 1 do capítulo 2',
          ordem: ''
        }
      },
      {
        name: 'Final ruim: Todos presos',
        id: 'f1',
        color: 'red',
        parent: 'c2_v1',
        attributes: {
          desc: 'Resistência 1',
          ordem: ''
        }
      },
      {
        name: 'Capítulo 2',
        id: 'c2_v2',
        color: 'black',
        parent: '7,4,5',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: ''
        }
      },
      {
        name: 'Estratégia eficaz',
        id: '8',
        parent: 'c2_v2',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[8]
        }
      },
      {
        name: 'Aumentar o risco',
        id: '9',
        parent: 'c2_v2',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[9]
        }
      },
      {
        name: 'Capítulo 3',
        id: 'c3_v1',
        color: 'black',
        parent: '8',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: ''
        }
      },
      {
        name: 'Ataque',
        id: '10',
        parent: '9',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[10]
        }
      },
      {
        name: 'Entregar tudo',
        id: '11',
        parent: '9',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[11]
        }
      },
      {
        name: 'Alternativa',
        id: '12',
        parent: '9',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[12]
        }
      },
      {
        name: 'Final ruim: Todos mortos',
        id: 'f2',
        color: 'red',
        parent: '10',
        attributes: {
          desc: 'Resistência 1',
          ordem: ''
        }
      },
      {
        name: 'Final ruim: Todos presos, Filipe morto',
        id: 'f3',
        color: 'red',
        parent: '11',
        attributes: {
          desc: 'Resistência 1',
          ordem: ''
        }
      },
      {
        name: 'Capitulo 3',
        id: 'c3_v2',
        color: 'black',
        parent: '12',
        attributes: {
          desc: 'Resistência 1',
          ordem: ''
        }
      },
      {
        name: 'Capítulo 4',
        id: 'c4',
        color: 'red',
        parent: 'c3_v2',
        attributes: {
          desc: 'Resistência 1',
          ordem: ''
        }
      },
      {
        name: 'Ficar alerta',
        id: '13',
        parent: 'c3_v1',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[13]
        }
      },
      {
        name: 'Aumentar moral',
        id: '14',
        parent: 'c3_v1',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[14]
        }
      },
      {
        name: 'Capítulo 4',
        id: 'c4_v1',
        parent: '13',
        color: 'black',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: ''
        }
      },
      {
        name: 'Todos morrem, felipe preso e morto',
        id: 'f4',
        parent: 'c4_v1',
        color: 'gold',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: ''
        }
      },
      {
        name: 'Rumo a nova resistência!',
        id: 'f5',
        parent: 'f4',
        color: 'gold',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[15]
        }
      },
      {
        name: 'Status Quo',
        id: 'f6',
        parent: 'f4',
        color: 'gold',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
          ordem: escolhas[16]
        }
      },
      {
        name: 'Celebração',
        id: 'celeb',
        parent: '14',
        color: 'gold',
        attributes: {
          desc: 'Versão 2 do capítulo 2',
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
          escolhas[elemento.idEscolhas] = "Escolha: " + elemento.ordemEscolha
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

var chart = JSC.chart('chartDiv', {
  debug: true,
  type: 'organizational down',
  legend_visible: false,
  series: [
    {
      defaultPoint: {
        label: {
          text: '<b>%name</b>',
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
            desc: '630-555-1111'
          }
        },
        {
          name: 'Resistêcia',
          id: '1',
          parent: 'pr',
          attributes: {
            desc: 'Resistência 1'
          }
        },
        {
          name: 'Pessimismo',
          id: '2',
          parent: 'pr',
          attributes: {
            desc: 'Pessimismo 2'
          }
        },
        {
          name: 'Capítulo 1',
          id: 'c1',
          color: 'black',
          parent: '1,2',
          attributes: {
            desc: 'Capítulo 1'
          }
        },
        {
          name: 'Aumenta moral',
          id: '3',
          parent: 'c1',
          attributes: {
            desc: 'Resistência 1'
          }
        },
        {
          name: 'Aumenta força',
          id: '4',
          parent: 'c1',
          attributes: {
            desc: 'Resistência 1'
          }
        },
        {
          name: 'Estratégia',
          id: '5',
          parent: 'c1',
          attributes: {
            desc: 'Resistência 1'
          }
        },
        {
          name: 'Tentar dialogar',
          id: '6',
          parent: '3',
          attributes: {
            desc: 'Resistência 1'
          }
        },
        {
          name: 'Atacar os agentes',
          id: '7',
          parent: '3',
          attributes: {
            desc: 'Resistência 1'
          }
        },
        {
          name: 'Capítulo 2',
          id: 'c2_v1',
          color: 'black',
          parent: '6',
          attributes: {
            desc: 'Versão 1 do capítulo 2'
          }
        },
        {
          name: 'Final ruim: Todos presos',
          id: 'f1',
          color: 'red',
          parent: 'c2_v1',
          attributes: {
            desc: 'Resistência 1'
          }
        },
        {
          name: 'Capítulo 2',
          id: 'c2_v2',
          color: 'black',
          parent: '7,4,5',
          attributes: {
            desc: 'Versão 2 do capítulo 2'
          }
        },
        {
          name: 'Estratégia eficaz',
          id: '8',
          parent: 'c2_v2',
          attributes: {
            desc: 'Versão 2 do capítulo 2'
          }
        },
        {
          name: 'Aumentar o risco',
          id: '9',
          parent: 'c2_v2',
          attributes: {
            desc: 'Versão 2 do capítulo 2'
          }
        },
        {
          name: 'Capítulo 3',
          id: 'c3_v1',
          color: 'black',
          parent: '8',
          attributes: {
            desc: 'Versão 2 do capítulo 2'
          }
        },
        {
          name: 'Ataque',
          id: '10',
          parent: '9',
          attributes: {
            desc: 'Versão 2 do capítulo 2'
          }
        },
        {
          name: 'Entregar tudo',
          id: '11',
          parent: '9',
          attributes: {
            desc: 'Versão 2 do capítulo 2'
          }
        },
        {
          name: 'Alternativa',
          id: '12',
          parent: '9',
          attributes: {
            desc: 'Versão 2 do capítulo 2'
          }
        },
        {
          name: 'Final ruim: Todos mortos',
          id: 'f2',
          color: 'red',
          parent: '10',
          attributes: {
            desc: 'Resistência 1'
          }
        },
        {
          name: 'Final ruim: Todos presos, Filipe morto',
          id: 'f3',
          color: 'red',
          parent: '11',
          attributes: {
            desc: 'Resistência 1'
          }
        },
        {
          name: 'Final ruim: Todos presos, Filipe morto',
          id: 'c3_v2',
          color: 'red',
          parent: '11',
          attributes: {
            desc: 'Resistência 1'
          }
        }
      ]
    }
  ],
  toolbar: {
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
  }
});

function atualizar(teste) {
  let chart = this.chart;
  chart.series(0).options({
    points: [
      {
        name: teste,
        id: 'pr',
        color: 'black',
        attributes: {
          desc: '630-555-1111'
        }
      },
      {
        name: 'Resistêcia',
        id: '1',
        parent: 'pr',
        attributes: {
          desc: 'Resistência 1'
        }
      },
      {
        name: 'Pessimismo',
        id: '2',
        parent: 'pr',
        attributes: {
          desc: 'Pessimismo 2'
        }
      },
      {
        name: 'Capítulo 1',
        id: 'c1',
        color: 'black',
        parent: '1,2',
        attributes: {
          desc: 'Capítulo 1'
        }
      },
      {
        name: 'Aumenta moral',
        id: '3',
        parent: 'c1',
        attributes: {
          desc: 'Resistência 1'
        }
      },
      {
        name: 'Aumenta força',
        id: '4',
        parent: 'c1',
        attributes: {
          desc: 'Resistência 1'
        }
      },
      {
        name: 'Estratégia',
        id: '5',
        parent: 'c1',
        attributes: {
          desc: 'Resistência 1'
        }
      },
      {
        name: 'Tentar dialogar',
        id: '6',
        parent: '3',
        attributes: {
          desc: 'Resistência 1'
        }
      },
      {
        name: 'Atacar os agentes',
        id: '7',
        parent: '3',
        attributes: {
          desc: 'Resistência 1'
        }
      },
      {
        name: 'Capítulo 2',
        id: 'c2_v1',
        color: 'black',
        parent: '6',
        attributes: {
          desc: 'Versão 1 do capítulo 2'
        }
      },
      {
        name: 'Final ruim: Todos presos',
        id: 'f1',
        color: 'red',
        parent: 'c2_v1',
        attributes: {
          desc: 'Resistência 1'
        }
      },
      {
        name: 'Capítulo 2',
        id: 'c2_v2',
        color: 'black',
        parent: '7,4,5',
        attributes: {
          desc: 'Versão 2 do capítulo 2'
        }
      },
      {
        name: 'Estratégia eficaz',
        id: '8',
        parent: 'c2_v2',
        attributes: {
          desc: 'Versão 2 do capítulo 2'
        }
      },
      {
        name: 'Aumentar o risco',
        id: '9',
        parent: 'c2_v2',
        attributes: {
          desc: 'Versão 2 do capítulo 2'
        }
      },
      {
        name: 'Capítulo 3',
        id: 'c3_v1',
        color: 'black',
        parent: '8',
        attributes: {
          desc: 'Versão 2 do capítulo 2'
        }
      },
      {
        name: 'Ataque',
        id: '10',
        parent: '9',
        attributes: {
          desc: 'Versão 2 do capítulo 2'
        }
      },
      {
        name: 'Entregar tudo',
        id: '11',
        parent: '9',
        attributes: {
          desc: 'Versão 2 do capítulo 2'
        }
      },
      {
        name: 'Alternativa',
        id: '12',
        parent: '9',
        attributes: {
          desc: 'Versão 2 do capítulo 2'
        }
      },
      {
        name: 'Final ruim: Todos mortos',
        id: 'f2',
        color: 'red',
        parent: '10',
        attributes: {
          desc: 'Resistência 1'
        }
      },
      {
        name: 'Final ruim: Todos presos, Filipe morto',
        id: 'f3',
        color: 'red',
        parent: '11',
        attributes: {
          desc: 'Resistência 1'
        }
      },
      {
        name: 'Final ruim: Todos presos, Filipe morto',
        id: 'c3_v2',
        color: 'red',
        parent: '11',
        attributes: {
          desc: 'Resistência 1'
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

function carregarAluno(id){

  dados = JSON.stringify({
      valor: id
    });
  console.log(dados)
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function(){
      console.log(this.responseText);
      tabela = JSON.parse(this.responseText);
      console.log(tabela.length);
      let nometurma = [];
      for(var i = 0; i <tabela.length; i++){
          nometurma[i] = '\''+tabela[i].nomeTurma+'\''
          console.log(nometurma[i]);
          document.getElementById('turmas').innerHTML +=
          '<div class="d-grid gap-2 d-md-flex justify-content-md-end divTurmas" id="divTurmas'+tabela[i].idGrupo+'"> <a class="btn btn-light LinkTurm1" onclick="estatTurma('+tabela[i].idGrupo+','+nometurma[i]+')" role="button">'+tabela[i].nomeTurma+' (código: '+tabela[i].idGrupo+')</a> <button class="btn btn-outline-danger btnTurmas" type="button" id="btnTurmas1"onclick="apagarTurma('+tabela[i].idGrupo+','+nometurma[i]+')">Remover</button></div>';
      }
  }
  xmlhttp.open("POST","http://localhost/carregar_turmas.php");
      xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xmlhttp.send("dados="+dados);
      console.log("Chegou aqui");
      console.log(dados);
}

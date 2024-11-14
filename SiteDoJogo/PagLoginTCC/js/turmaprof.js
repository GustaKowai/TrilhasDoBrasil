function carregarTurmas(id){

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

function apagarTurma(id,nome){
    let resp=window.prompt("Confirme com o nome da turma:")
    if (resp == nome){
        xmlhttp = new XMLHttpRequest();
        idGrupo = id;
        dados = JSON.stringify({idGrupo:idGrupo});
        xmlhttp.onload = function(){
            alert(this.responseText)
            window.location.href = 'turmasprof.html';
        }
        xmlhttp.open("POST","http://localhost/apagar_turma.php");
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlhttp.send("dados="+dados);
        console.log("Chegou aqui");
        console.log(dados);

    }else{
        alert("O nome digitado não coincide com o nome da turma")
    }

}

function estatTurma(idTurma,nometurma){
    setCookie("turma",idTurma)
    setCookie("turmaNome",nometurma),
    window.location.href = 'estatisticas.html';
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let idProfessor = getCookie("idProfessor");
    if (idProfessor != "") {
        carregarTurmas(idProfessor);
    } else {
        carregarTurmas(1)
        //window.location.href = 'index.html';
    }
  }

  function sair(){
    document.cookie = "idProfessor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = 'index.html';
  }
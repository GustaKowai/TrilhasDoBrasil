function checkCookie() {
    let idTurma = getCookie("turma");
    let nomeTurma = getCookie("turmaNome");
    carregarAlunos(idTurma,nomeTurma);
  }

function carregarAlunos(id,nome){
    dados = JSON.stringify({
        valor: id
      });
    console.log(dados)
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        console.log(this.responseText);
        tabela = JSON.parse(this.responseText);
        console.log(tabela.length);
        document.getElementById('alunos').innerHTML +='<button type="button" class="btn btn-outline-dark">'+nome+'</button>';
        for(var i = 0; i <tabela.length; i++){
            document.getElementById('alunos').innerHTML +=
            '<button type="button" class="btn btn-outline-dark">'+tabela[i].nome+'</button>';
        }
    }
    xmlhttp.open("POST","http://localhost/carregar_estatisticas.php");
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlhttp.send("dados="+dados);
        console.log("Chegou aqui");
        console.log(dados);
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
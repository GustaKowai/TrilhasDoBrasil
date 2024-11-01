function carregarTurmas(){
    dados = JSON.stringify({
        valor: 1
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
            '<div class="d-grid gap-2 d-md-flex justify-content-md-end divTurmas" id="divTurmas'+tabela[i].idGrupo+'"> <a class="btn btn-light LinkTurm1" href="#" role="button">'+tabela[i].nomeTurma+'</a> <button class="btn btn-outline-danger btnTurmas" type="button" id="btnTurmas'+tabela[i].idGrupo+'"onclick="apagarTurma('+tabela[i].idGrupo+','+nometurma[i]+')">Remover</button></div>';
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
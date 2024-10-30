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
        for(var i = 0; i <tabela.length; i++){
            document.getElementById('turmas').innerHTML +=
            '<div class="d-grid gap-2 d-md-flex justify-content-md-end" id="divTurmas'+tabela[i].idGrupo+'"> <a class="btn btn-light LinkTurm1" href="#" role="button">'+tabela[i].nomeTurma+'</a> <button class="btn btn-outline-danger" type="button" id="btnTurmas'+tabela[i].idGrupo+'"onclick="clicado()">Remover</button></div>';
        }
    }
    xmlhttp.open("POST","http://localhost/carregar_turmas.php");
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlhttp.send("dados="+dados);
        console.log("Chegou aqui");
        console.log(dados);
}
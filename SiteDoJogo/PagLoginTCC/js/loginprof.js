function login(){
    testUser()
}

function testUser(){
    id = 0;
    console.log("chegou aqui!!!")
    usuario = document.getElementById("profLogin").value;
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        console.log(this.responseText);
        tabela = JSON.parse(this.responseText);
        console.log(tabela.length);
        for(var i = 0; i <tabela.length; i++){
            console.log(tabela[i].profLogin,usuario)
            if (tabela[i].profLogin == usuario){
                id = tabela[i].idProfessor
                console.log("O login existe!!")
                console.log(id)
                testPassword(id)
            }
        }
        if (id==0){
            alert("Usuário não encontrado")
        }
    }
    xmlhttp.open("POST","http://localhost/checkLogin.php");
    xmlhttp.send();
    
}

function testPassword(id){
    senha = document.getElementById("senha").value;
    dados = JSON.stringify({idProfessor:id});
    console.log(dados)
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        console.log(this.responseText);
        tabela = JSON.parse(this.responseText);
        console.log(tabela.length);
        for(var i = 0; i <tabela.length; i++){
            console.log(tabela[i].senha,senha)
            if (tabela[i].senha == senha){
                alert("A senha está correta")
            }else{
                alert("A senha está incorreta")
            }
        }
        
    }
    xmlhttp.open("POST","http://localhost/checkSenha.php");
    xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlhttp.send("dados="+dados);
    console.log("Chegou aqui");
    console.log(dados);
    
}
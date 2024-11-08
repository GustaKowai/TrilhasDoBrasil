function login(){
    testando = 0;
    console.log("chegou aqui!!!")
    usuario = document.getElementById("profLogin").value;
    senha = document.getElementById("senha").value;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        console.log(this.responseText);
        tabela = JSON.parse(this.responseText);
        console.log(tabela.length);
        for(var i = 0; i <tabela.length; i++){
            console.log(tabela[i].profLogin,usuario)
            if (tabela[i].profLogin == usuario){
                testando = 1
                console.log("O login existe!!")
                console.log(tabela[i].senha, senha)
                if (tabela[i].senha == senha){
                    setCookie("idProfessor",tabela[i].idProfessor,1)
                    window.location.href = 'turmasprof.html';
                }
                else{
                    alert("A senha e o usuário não correspondem")
                }
            }
            }
        if (testando==0){
            alert("Usuário não encontrado")
        }
    }
    xmlhttp.open("POST","http://localhost/checkLogin.php");
    xmlhttp.send();
    
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
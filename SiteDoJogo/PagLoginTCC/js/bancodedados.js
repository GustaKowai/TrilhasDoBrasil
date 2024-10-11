/*function checkLogin(username,senha,tabela,coluna){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    xmlhttp = new XMLHttpRequest();
    user = JSON.stringify({profLogin:usuario,senha:senha})
    xmlhttp.open("POST","checkLogin.php");
    xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlhttp.send("user="+user)
}*/
function teste(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        console.log(this.responseText);
        tabela = JSON.parse(this.responseText);
        console.log(tabela.length);
        console.log(tabela[1].idProfessor);
        for(var i = 0; i <tabela.length; i++){
            document.getElementById('testando').innerHTML += '<div value="'+tabela[i].idProfessor+'" id="cat'+tabela[i].idProfessor+'">'+tabela[i].nome+'</div>';
        }
    }
    xmlhttp.open("POST","http://localhost/checkLogin.php");
    xmlhttp.send();
}
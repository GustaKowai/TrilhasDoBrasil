function cadastrar(){
    xmlhttp = new XMLHttpRequest();
    let nome,senha,confirmasenha,idProfessor;
    nome = document.getElementById("nomeTurma").value;
    senha = document.getElementById("senhaTurma").value;
    confirmasenha = document.getElementById("confirmaSenhaTurma").value;
    idProfessor = 1; //Trocar pelo cookie com o id do professor

    if (testAll()){
        dados = JSON.stringify({nomeTurma:nome,senhaTurma:senha,idProfessor:idProfessor});
        xmlhttp.onload = function(){
            alert(this.responseText)
            window.location.href = 'turmasprof.html';
        }
        xmlhttp.open("POST","http://localhost/cadastro_turma.php");
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlhttp.send("dados="+dados);
        console.log("Chegou aqui");
        console.log(dados);
    }
}

function passStrenght(){
    senha = document.getElementById("senhaTurma").value;
    console.log(senha.length);
    let senhaForte = false;
    if (senha.length < 6){
        senhaForte = false;
    }else if (senha.length > 45){
        senhaForte = false;
    }else{
        senhaForte = true;
    }
    return senhaForte    
}

function testConfirmPassword(){
    senha = document.getElementById("senhaTurma").value;
    testeSenha = document.getElementById("confirmaSenhaTurma").value;
    let senhaConfirmada = false
    if (senha != testeSenha){
        senhaConfirmada = false;
    }else{
        senhaConfirmada = true;
    };
    if (testeSenha.length == 0){
        senhaConfirmada = false;
    };
    return senhaConfirmada;
}

function testName(){
    let result
    nome = document.getElementById("nomeTurma").value
    if (nome.length < 4){
        result = false;
    }else if (nome.length > 45){
        result = false;
    }else{
        result = true;
    }
    return result;
}

function testAll(){
    let liberado = true;
    let message = "";
    if(!testName()){
        message += "O nome deve ter pelo menos 4 digítos e no máximo 45 dígitos  \n";
        liberado = false
    }
    if(!passStrenght()){
        message += "A senha deve ter pelo menos 6 dígitos e no máximo 45 dígitos \n";
        liberado = false
    }
    if(!testConfirmPassword()){
        message += "A senhas não coincidem \n";
        liberado = false
    }
    if (!liberado){
        alert(message)
    }
    return liberado    
}
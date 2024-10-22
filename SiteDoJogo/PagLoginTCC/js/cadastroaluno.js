function cadastrar(){
    xmlhttp = new XMLHttpRequest();
    let nome,usuario,email,senha;
    nome = document.getElementById("nomeAluno").value;
    usuario = document.getElementById("userAluno").value;
    email = document.getElementById("emailAluno").value;
    senha = document.getElementById("senhaAluno").value;
    confirmaSenha = document.getElementById("confirmaSenhaAluno").value;
    turma = document.getElementById("turmaAluno").value

    if (testAll()){
        dados = JSON.stringify({nome:nome,alunoLogin:usuario,alunoEmail:email,senha:senha,idGrupo:turma});
        xmlhttp.onload = function(){
            alert(this.responseText)
            window.location.href = 'index.html';
        }
        xmlhttp.open("POST","http://localhost/cadastro_aluno.php");
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlhttp.send("dados="+dados);
        console.log("Chegou aqui");
        console.log(dados);
    }
}

function passStrenght(){
    let strenght;
    strenght = document.getElementById('iconPassword');
    senha = document.getElementById("senhaAluno").value;
    console.log(senha.length);
    let senhaForte = false;
    if (senha.length < 4){
        strenght.style.color = '#ff0000';
        senhaForte = false;
    }else if (senha.length < 6){
        strenght.style.color = '#ffff00';
        senhaForte = false;
    }else if (senha.length > 45){
        strenght.style.color = '#ff0000';
        senhaForte = false;
    }else{
        strenght.style.color = '#00ff00';
        senhaForte = true;
    }
    return senhaForte    
}

function testConfirmPassword(){
    confirmaSenha = document.getElementById("iconConfirm")
    senha = document.getElementById("senhaAluno").value;
    testeSenha = document.getElementById("confirmaSenhaAluno").value;
    let senhaConfirmada = false
    if (senha != testeSenha){
        confirmaSenha.style.color = '#ff0000';
        senhaConfirmada = false;
    }else{
        confirmaSenha.style.color = '#00ff00';
        senhaConfirmada = true;
    };
    if (testeSenha.length == 0){
        confirmaSenha.style.color = '#ff0000';
        senhaConfirmada = false;
    };
    return senhaConfirmada;
}

function testName(){
    let result
    nome = document.getElementById("nomeAluno").value
    iconName = document.getElementById("iconName")
    if (nome.length < 4){
        result = false
        iconName.style.color = '#ff0000';
    }else if (nome.length > 45){
        result = false
        iconName.style.color = '#ff0000';
    }else{
        result = true
        iconName.style.color = '#00ff00';
    }
    return result;
}
function testUser(){
    let result
    nome = document.getElementById("userAluno").value
    iconUser = document.getElementById("iconUser")
    if (nome.length < 4){
        result = false
        iconUser.style.color = '#ff0000';
    }else if (nome.length > 45){
        result = false
        iconName.style.color = '#ff0000';
    }else{
        result = true
        iconUser.style.color = '#00ff00';
    }
    return result;
}
function testEmail(){
    let result
    nome = document.getElementById("emailAluno").value
    iconEmail = document.getElementById("iconEmail")
    if (nome.length < 4){
        result = false
        iconEmail.style.color = '#ff0000';
    }else if (nome.length > 45){
        result = false
        iconName.style.color = '#ff0000';
    }else{
        result = true
        iconEmail.style.color = '#00ff00';
    }
    return result;
}

function testUserUnique(){
    testando = 0;
    console.log("chegou aqui!!!")
    usuario = document.getElementById("userAluno").value;
    iconUser = document.getElementById("iconUser");
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        console.log(this.responseText);
        tabela = JSON.parse(this.responseText);
        console.log(tabela.length);
        for(var i = 0; i <tabela.length; i++){
            console.log(tabela[i].alunoLogin,usuario)
            if (tabela[i].alunoLogin == usuario){
                testando = 1
                console.log("tem igual sim")
                alert ("Usuário já existe")
                iconUser.style.color = '#ff0000';
            }
        }
        if (testando != 1){
            console.log("Não tem nenhum igual")
            teste_turma()
        }
    }
    xmlhttp.open("POST","http://localhost/checkLoginAluno.php");
    xmlhttp.send();
    
}

function testAll(){
    let liberado = true;
    let message = "";
    if(!testName()){
        message += "O nome deve ter pelo menos 4 digítos e no máximo 45 dígitos  \n";
        liberado = false
    }
    if(!testUser()){
        message += "O nome de usuário deve ter pelo menos 4 digítos e no máximo 45 dígitos  \n";
        liberado = false
    }
    if(!testEmail()){
        message += "O email deve ter pelo menos 4 digítos e no máximo 45 dígitos  \n";
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

function teste_turma(){
    turmaCheck = -1;
    console.log("chegou aqui!!!")
    turma = document.getElementById("turmaAluno").value;
    iconTurma = document.getElementById("iconTurma");
    iconSenhaTurma = document.getElementById("iconSenhaTurma");
    senhaTurma = document.getElementById("senhaturmaAluno").value;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        console.log(this.responseText);
        tabela = JSON.parse(this.responseText);
        console.log(tabela.length);
        for(var i = 0; i <tabela.length; i++){
            console.log(tabela[i].idGrupo,turma)
            if (tabela[i].idGrupo == turma){
                turmaCheck = i;
                console.log("A turma existe")
                iconTurma.style.color = '#00ff00';
            }
        }
        if (turmaCheck == -1){
            console.log("A turma não existe")
            alert ("Não foi encontrada uma turma com esse código")
            iconUser.style.color = '#00ff00';
        }else{
            if (senhaTurma == tabela[turmaCheck].senha){
                cadastrar()
            } else {
                alert("A senha da turma não está correta")
                iconSenhaTurma.style.color = '#ff0000';
            }
        }
    }
    xmlhttp.open("POST","http://localhost/checkGrupo.php");
    xmlhttp.send();
}
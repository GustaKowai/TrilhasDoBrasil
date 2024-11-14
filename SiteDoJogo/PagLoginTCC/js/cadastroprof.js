//Função usada para cadastrar o professor
function cadastrar(){
    xmlhttp = new XMLHttpRequest();
    let nome,usuario,email,senha;
    nome = document.getElementById("nomeProf").value;
    usuario = document.getElementById("userProf").value;
    email = document.getElementById("emailProf").value;
    senha = document.getElementById("senhaProf").value;
    confirmaSenha = document.getElementById("confirmaSenhaProf").value;

    if (testAll()){//Checa se tudo está em ordem para poder fazer o cadastro
        dados = JSON.stringify({nome:nome,profLogin:usuario,profEmail:email,senha:senha});
        xmlhttp.onload = function(){
            alert(this.responseText)
            window.location.href = 'index.html';
        }
        xmlhttp.open("POST","http://localhost/cadastro_professor.php");
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlhttp.send("dados="+dados);
        console.log("Chegou aqui");
        console.log(dados);
    }
}

function passStrenght(){//checa o tamanho da senha
    let strenght;
    strenght = document.getElementById('iconPassword');
    senha = document.getElementById("senhaProf").value;
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

function testConfirmPassword(){//checa se a senha confirmada está igual a senha digitada
    confirmaSenha = document.getElementById("iconConfirm")
    senha = document.getElementById("senhaProf").value;
    testeSenha = document.getElementById("confirmaSenhaProf").value;
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

function testName(){//checa se o nome tem o tamanho adequado
    let result
    nome = document.getElementById("nomeProf").value
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
function testUser(){//checa se o usuário tem o tamanho necessário
    let result
    nome = document.getElementById("userProf").value
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
function testEmail(){//checa se o email tem o tamanho necessário
    let result
    nome = document.getElementById("emailProf").value
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

function testUserUnique(){//Checa se o usuário é único
    testando = 0;
    console.log("chegou aqui!!!")
    usuario = document.getElementById("userProf").value;
    iconUser = document.getElementById("iconUser");
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        console.log(this.responseText);
        tabela = JSON.parse(this.responseText);
        console.log(tabela.length);
        for(var i = 0; i <tabela.length; i++){
            console.log(tabela[i].profLogin,usuario)
            if (tabela[i].profLogin == usuario){
                testando = 1
                console.log("tem igual sim")
                alert ("Usuário já existe")
                iconUser.style.color = '#ff0000';
            }
        }
        if (testando != 1){
            console.log("Não tem nenhum igual")
            cadastrar()
        }
    }
    xmlhttp.open("POST","http://localhost/checkLogin.php");
    xmlhttp.send();
    
}

function testAll(){//checa se todos os testes foram bem sucedidos e apresenta a mensagem com os erros
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
<?php
    $dados = json_decode($_POST['dados']);
    $categorias = json_decode($_POST['categorias']);

    //declaração
    $host = "localhost"; // Your MySQL server host
    $port = 3306;        // MySQL port
    $user = "root"; // Your MySQL username
    $password = ""; // Your MySQL password
    $dbname = "trilhadobrasil"; // Your MySQL database name

    try{
        $conn = new PDO("mysql:host=$host;port=$port;dbname=$dbname",$user,$password);
        $sql = 'insert into tb_professor(idProfessor,nome,profLogin,profEmail,senha';
        $declaracao = $conn->prepare($sql);
        $declaracao->bindParam("idProfessor",$dados->idProfessor);
        $declaracao->bindParam("nome",$dados->nome);
        $declaracao->bindParam("profLogin",$dados->profLogin);
        $declaracao->bindParam("profEmail",$dados->profEmail);
        $declaracao->bindParam("senha",$dados->senha);

        $resul = $declaracao->execute();
    }catch(PDOException $e){
        echo ("falhou".$e->getMessage());
    }
?>
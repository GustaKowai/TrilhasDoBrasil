<?php
    header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific methods
    header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers
    
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }

    $dados = json_decode($_POST["dados"]);
    //echo("os dados são:" = $dados);
    //declaração
    $host = "localhost"; // Your MySQL server host
    $port = 3306;        // MySQL port
    $user = "root"; // Your MySQL username
    $password = ""; // Your MySQL password
    $dbname = "trilhadobrasil"; // Your MySQL database name

    try{
        $conn = new PDO("mysql:host=$host;port=$port;dbname=$dbname",$user,$password);
        $sql = 'insert into tb_professor(nome,profLogin,profEmail,senha) values (:nome,:profLogin,:profEmail,:senha)';
        $declaracao = $conn->prepare($sql);
        $declaracao->bindParam("nome",$dados->nome);
        $declaracao->bindParam("profLogin",$dados->profLogin);
        $declaracao->bindParam("profEmail",$dados->profEmail);
        $declaracao->bindParam("senha",$dados->senha);
        $resul = $declaracao->execute();
        if($resul == 1){
            echo ("Conta criada com sucesso");
        }else{
            echo ("Criação da conta falhou");
        }
    }catch(PDOException $e){
        echo ("falhou".$e->getMessage());
    }
?>
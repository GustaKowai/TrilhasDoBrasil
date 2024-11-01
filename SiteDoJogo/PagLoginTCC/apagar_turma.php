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
        $sql = 'DELETE FROM tb_grupo WHERE idGrupo = :idGrupo';
        $declaracao = $conn->prepare($sql);
        $declaracao->bindParam("idGrupo",$dados->idGrupo);
        $resul = $declaracao->execute();
        if($resul == 1){
            echo ("Turma apagada com sucesso");
        }else{
            echo ("Remoção da turma falhou");
        }
    }catch(PDOException $e){
        echo ("falhou".$e->getMessage());
    }
?>
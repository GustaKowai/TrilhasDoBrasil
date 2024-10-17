<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$host = "localhost"; // Your MySQL server host
$port = 3306;        // MySQL port
$user = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "trilhadobrasil"; // Your MySQL database name

try {
    $conn = new PDO("mysql:host=$host;port=$port;dbname=$dbname",$user,$password);
    $sql = 'SELECT profLogin FROM tb_aluno';
    $tabela = $conn->prepare($sql);
    $tabela->execute();
    $tabela = $conn->query($sql);
    //processamento
    $dados = $tabela->fetchAll(PDO::FETCH_ASSOC);
    header("content-type:application/json");
    echo json_encode($dados,JSON_INVALID_UTF8_SUBSTITUTE);
} catch(PDOException $e){
    echo("Falhou".$e->getMessage());
}
?>
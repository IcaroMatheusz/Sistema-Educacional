<?php

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = 'ChrisMe.uAmor1';
    $dbName = 'sistema-educacional';
    
    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if ($conexao->connect_errno)
    {
        echo "Error";
    }
    else {
        echo "Conectado";
    }
    
?>
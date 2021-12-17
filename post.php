<?php 

$usuario = $_POST('usuario')
$pass = $_POST('pass')

if($usuario === '' !! $pass ===''){
    echo json_encode('llena todos los campos')
}else{
    echo json_encode('correcto <br>Usuario:' .$usuario. '<br>Pass:' .$pass )
}
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$respuesta=array("total"=>0,"electricidad"=>0,"personal"=>0,"autos"=>0,"barcos"=>0,"aviones"=>0,"comedor"=>0);
$_POST = json_decode(file_get_contents('php://input'), true);

$archivo=fopen("ubicaciones.json","r");
$listado=json_decode(fread($archivo,filesize("ubicaciones.json")),true);

$tarifaElectricidad=1;

$factorElectricidad=0.494;
$factorPersonas=0.2;
$factorAutos=433;
$factorBarcos=8043401;
$factorAviones=52.742;
$factorComedor=450000;

if(isset($_POST["pago"])){
	$pagoElectricidad=$_POST["pago"];
}
if(isset($_POST["count_personas"])){
	$cantidadPersonas=$_POST["count_personas"];
}
if(isset($_POST["count_autos"])){
	$cantidadAutos=$_POST["conunt_autos"];
}

if(isset($_POST["count_aviones"])){
	$cantidadAviones=$_POST["count_aviones"];
}

if(isset($_POST["count_barcos"])){
	$cantidadBarcos=$_POST["count_barcos"];
}
if(isset($_POST["count_comedores"])){
	$cantidadComedores=$_POST["count_comedores"];
}

if(isset($_POST["ubicacion"])){
	$tarifaElectricidad=$listado[$_POST["ubicacion"]];
}


$respuesta["electricidad"]=($pagoElectricidad/$tarifaElectricidad)*$factorElectricidad;
$respuesta["personal"]=$cantidadPersonas*$factorPersonas;
$respuesta["autos"]=$cantidadAutos*$factorAutos;
$respuesta["barcos"]=$cantidadBarcos*$factorBarcos;
$respuesta["aviones"]=$cantidadAviones*$factorAviones;
$respuesta["comedor"]=$cantidadComedores*$factorComedores;

// $respuesta["electricidad"]=random_int(0,500000);
// $respuesta["personal"]=random_int(0,500000);
// $respuesta["autos"]=random_int(0,500000);
// $respuesta["barcos"]=random_int(0,500000);
// $respuesta["aviones"]=random_int(0,500000);
// $respuesta["comedor"]=random_int(0,500000);


$respuesta["total"]=$respuesta["electricidad"]+$respuesta["personal"]+$respuesta["autos"]+$respuesta["barcos"]+$respuesta["aviones"]+$respuesta["comedor"];

echo(json_encode($respuesta));
?>


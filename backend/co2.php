<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$respuesta=array("total"=>0,"electricidad"=>0,"personal"=>0,"autos"=>0,"barcos"=>0,"aviones"=>0,"comedor"=>0);
$_POST = json_decode(file_get_contents('php://input'), true);

$archivo=fopen("ubicaciones.json","r");
$listado=json_decode(fread($archivo,filesize("ubicaciones.json")),true);

$ubicacion="";
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
if(isset($_POST["conunt_autos"])){
	$cantidadAutos=$_POST["conunt_autos"];
}

// $respuesta["electricidad"]=($pagoElectricidad/$tarifaElectricidad)*$factorElectricidad;
// $respuesta["personal"]=$cantidadPersonas*$factorPersonas;
// $respuesta["autos"]=$cantidadAutos*$factorAutos;
$respuesta["electricidad"]=random_int(0,500000);
$respuesta["personal"]=random_int(0,500000);
$respuesta["autos"]=random_int(0,500000);


$respuesta["total"]=$respuesta["electricidad"]+$respuesta["persosnal"]+$respuesta["autos"]+$respuesta["barcos"]+$respuesta["aviones"]+$respuesta["comedor"];

echo(json_encode($respuesta));
?>


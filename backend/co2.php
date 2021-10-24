<?php
// CORS
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

//GENERACION DEL ARRAY
$respuesta=array("total"=>0,"electricidad"=>0,"personal"=>0,"autos"=>0,"barcos"=>0,"aviones"=>0,"comedor"=>0);

//RECEPCION DEL JSON
$_POST = json_decode(file_get_contents('php://input'), true);

//CARGA DE UBICACIONES DESDE EL JSON
$archivo=fopen("ubicaciones.json","r");
$listado=json_decode(fread($archivo,filesize("ubicaciones.json")),true);

//INICIALIZACION DE LA TARIFA
$tarifaElectricidad=1;

// FACTORES POR UNIDAD
$factorElectricidad=0.494;
$factorPersonas=0.2;
$factorAutos=433;
$factorBarcos=8043401;
$factorAviones=52.742;
$factorComedor=450000;

// CARGA DEL ARRAY EN VARIABLES
if(isset($_POST["pago"])){
	$pagoElectricidad=$_POST["pago"];
}
if(isset($_POST["countPersonas"])){
	$cantidadPersonas=$_POST["countPersonas"];
}
if(isset($_POST["countAutos"])){
	$cantidadAutos=$_POST["conuntAutos"];
}

if(isset($_POST["countAviones"])){
	$cantidadAviones=$_POST["countAviones"];
}

if(isset($_POST["countBarcos"])){
	$cantidadBarcos=$_POST["countBarcos"];
}
if(isset($_POST["count_comedores"])){
	$cantidadComedores=$_POST["countComedores"];
}

if(isset($_POST["ubicacion"])){
	$tarifaElectricidad=$listado[$_POST["ubicacion"]];
}

// SE REALIZAN LOS CALCULOS
$respuesta["electricidad"]=($pagoElectricidad/$tarifaElectricidad)*$factorElectricidad;
$respuesta["personal"]=$cantidadPersonas*$factorPersonas;
$respuesta["autos"]=$cantidadAutos*$factorAutos;
$respuesta["barcos"]=$cantidadBarcos*$factorBarcos;
$respuesta["aviones"]=$cantidadAviones*$factorAviones;
$respuesta["comedor"]=$cantidadComedores*$factorComedores;

// GENERAR VALORES RANDOM
// $respuesta["electricidad"]=random_int(0,500000);
// $respuesta["personal"]=random_int(0,500000);
// $respuesta["autos"]=random_int(0,500000);
// $respuesta["barcos"]=random_int(0,500000);
// $respuesta["aviones"]=random_int(0,500000);
// $respuesta["comedor"]=random_int(0,500000);

//SUMATORIA DE RUBROS
$respuesta["total"]=$respuesta["electricidad"]+$respuesta["personal"]+$respuesta["autos"]+$respuesta["barcos"]+$respuesta["aviones"]+$respuesta["comedor"];

//DEVOLUCION DEL JSON
echo(json_encode($respuesta));
?>


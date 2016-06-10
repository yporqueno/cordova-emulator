<?php

	header("Access-Control-Allow-Origin: *");
	header('Content-Type: text/html; charset=utf-8');

	/*ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);*/

	if (isset($_REQUEST['dir'])) {
		$dir = stripslashes($_REQUEST['dir']);
	} else {
		die('listfilesindirectory.php?dir=ruta/al/directorio/');
	}

	$handle = opendir($dir);

	$cadena = '';
	$cadena .= '{';
	$cadena .= '"files":[';

	while ($file = readdir($handle))  {
		if (is_file($dir . $file)) {
			$cadena .= '"' . $file . '",';
		}
	}

	if(substr($cadena, -1) === ','){
		$cadena = substr_replace($cadena ,"",-1);
	}
	$cadena .= ']}';

	echo($cadena);
?>


<?php

solution([3, 8, 9, 7, 6], 3);

function solution($a, $r){
	$modulo = $r%count($a);
	
	
	$novoArray=array();
	
	foreach($a as $r=>$valor){
		$limite = $r+$modulo;
		if($limite<count($a)){

			$novoArray[$limite]=$valor;
		}
		else {
			$novoArray[($limite)-count($a)]=$valor;
		}
	}
 	ksort($novoArray);

		return $novoArray;
}


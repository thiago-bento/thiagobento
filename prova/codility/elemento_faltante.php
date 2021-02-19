<?php

var_dump(solution([3, 7, 9, 7, 3]));



function solution($A){
	$newArray = array();
	foreach($A as $key=>$value){

        echo "A posição é $key e o valor é $value".PHP_EOL;
		if(!isset($newArray[$value])){
			$newArray[$value]=1;
            echo "Entrou no IF.... é $key e o valor é $value".PHP_EOL;
		}
		else if( $newArray[$value]===1 ){
			unset($newArray[$value]);
            echo "Entrou no Else.... é $key e o valor é $value".PHP_EOL;
        }
	}
	return key($newArray);

}    
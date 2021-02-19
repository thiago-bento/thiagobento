<?php

 function solucao($N){
    $binario= decbin($N);
    $cont = 0;
    $maximo = 0;

    for ($i=0; $i <strlen($binario) ; $i++) { 
        $valor= $binario[$i];
        if($valor == 1){
            $maximo = max($maximo, $cont);
            
            $cont = 0;
        }else{
            $cont++;
        }
        
    }
    return $maximo;
}

echo solucao(1041);
    




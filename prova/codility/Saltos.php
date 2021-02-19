<?php

// calcular quantos pulos são necessário para chegar no final.  X=Inicio Y=Final D=distancia
function solution($x, $y, $d){
  
    $conta = $y - $x;

    $result = $conta / $d;

    if($conta%$d == 0){
       
        return $result;
    
    }else{

        $arredonda = ceil($result );
        $inteiro= intval($arredonda);
    
        return $inteiro;
    }    

     
}

echo solution(40,100,20);
    
    //logica utilizada foi distancia final + distancia iniio / pulo = resultadoarredondando para cima.

<?php

function binario($n){

    $maior = max($n);
    
    $dec= decbin($maior);

    echo "o numero $v em binário é ".decbin($v).PHP_EOL;
        for ($i=0; $i < count($n) ; $i++) { 
        
            $v=$n[$i];

            
        }

        /*foreach ($n as $key => $value) {
        
        $bin = decbin($value);
        
        echo "o numero $value em binário é $bin".PHP_EOL;

        }*/

    echo "O Mario numero binário desta lista é $dec".PHP_EOL;
    }


    binario([5,2,5,9,0]);
?>

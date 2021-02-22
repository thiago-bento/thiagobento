<?php
//Exibir o primeiro numero inteiro positivo faltante na sequencia do array

function listInt($n){


    for ($i=1; $i < count($n) ; $i++) { 
    
        if (!in_array($i, $n, false)) {
            $i+1;
           
       return $i;
        }
    }
}

listInt([5,2,3,1,4,7,8]);
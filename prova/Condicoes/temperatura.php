<?php

echo "Temperatudo de  Farreningt => Celcius";

function temperatura($n) {
 
    $f = (($n -32)/9)*5;

       $result = round( $f , 2 ); 
   

   echo "temperatura $result";
}


temperatura(33);

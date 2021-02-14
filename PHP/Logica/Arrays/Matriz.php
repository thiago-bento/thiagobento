<?php


$matriz = array (array (6,4),
                 array (4,9),
                 array (3,2));

echo "array antes dos ajustes ";
print_r($matriz);


$matriz[0][1]=[2][0];

echo "array DEPOIS dos ajustes ";
print_r($matriz);
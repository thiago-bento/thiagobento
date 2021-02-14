<?php


function solution($arr) {
    $arr = [2,3,5,9,6,7];
                                                                                      /*sort ($arr);
                                                                                    $arr1 = array_unique ($arr);
                                                                                    print_r($arr1);
                                                                                                     */
    print_r($arr);

    for ($i = 1; $i !=count($arr) ; $i++) { 

        if (!in_array($i, $arr)){
            echo $i;
        }  
    }  

}

solution();
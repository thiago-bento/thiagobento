
<?php 
function solution($M, $A) {
    $N = sizeof($A);
    $count = array_pad($M,  $M + 1, 0);
    $maxOccurence = 1;
    $index = -1;
    for ($i = 0; $i < $N; $i++) {
        if ($count[$A[$i]] > 0) {
            $tmp = $count[$A[$i]];
            if ($tmp > $maxOccurence) {
                $maxOccurence = $tmp;
                $index = $i;
            }
            $count[$A[$i]] = $tmp + 1;
        } else {
            $count[$A[$i]] = 1;
        }
    }
    var_dump($A[$index]);
}

solution([1,2,3,3,1,3,1],3);
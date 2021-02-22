
<?php 
function solution($M, $A) {
    $N = sizeof($A);
    $count = array_pad( $A, $N + 1, 0);
    
    $maxOccurence = 1;
    $index = -1;
    for ($i = 0; $i <= $N+1; $i++) {
        if ($count[$A[$i]] > 0) {
            
            $tmp = $count[$A[$i]];
            
           
            if ($tmp >= $maxOccurence) {
                $maxOccurence = $tmp;
                $index = $i;
                
            }
            echo "if".$count[$A[$i]] = $tmp;
        } else {
            echo "Else".$count[$A[$i]] = 1;
        }
    }
    return "final".$count;
}

solution(4,[1,2,3,3,1,3,1]);
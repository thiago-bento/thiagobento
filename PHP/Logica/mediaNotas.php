<?php

    $n1=10;
    $n2=10;
    $n3=5;
    
     $peso = $n1*2 + $n2*3 + $n3*5;
    
        $media = 8.5;

        echo "Sua media final é $media.";
    
        if ($media <= 5){

            echo "voce está Reprovado";

        }elseif ($media > 5 && $media  < 8 ) {
            
            echo "voce está Aprovado";

        }else{

            switch ($media) {
                case  8 :
                    echo " Aprovado Muito bom media 8";
                    break;

                case  9 :
                    echo " Aprovado Muito bom media 0";
                    break;

                    case 10:
                echo " Aprovado Muito bom media 10";
                    break;
            }
        }
   
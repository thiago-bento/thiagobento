
<div class="titulo">Desafio Km para milher</div>

<?php


const MESES = array (
    1 => "Janeiro",
     "Fevereiro",
    "Março",
    "Abril",
    "Maio",
     "Junho",
     "Julho",
    "Agosto",
     "Setembro",
     "Outubro",
     "Novembro",
     "Dezembro",
);

$sorteio = array_rand(MESES);

echo "<h1>".MESES[$sorteio]."</h1>";
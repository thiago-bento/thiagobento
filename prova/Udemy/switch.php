<div class="titulo">Desafio Km para milher</div>

<form action="#" method="POST">

    <input type="text" name="valor" id=valor>
        <select name="tipo" id="tipo">
            <option value="km_milha">Km para Milha</option>
            <option value="milha_km">Milha para Km</option>
            <option value="km_m">Km para Metros</option>
        </select>

    <button> Calcular</button>
</form>
    <style>
        form > * {
            font-size: 1.8rem;
        }
    </style>

<?php

const FATOR_KM_MILHA = 0.62137119;
const FATOR_METRO_KM = 1000;
const FATOR_MILHA_KM = 1.609344;

    $valor = $_POST ['valor'] ?? 0;
    $tipo = $_POST ['tipo'];
      $result= 0;

    switch ($tipo) {
        case 'km_milha':
            $result= $valor * FATOR_KM_MILHA;
            break;

        case 'milha_km':
            $result= $valor * FATOR_MILHA_KM;
            break; 

        case 'milha_km':
            $result= $valor * FATOR_MILHA_KM;
            break; 

        default:
        $result =  "Informe um valor";
            break;
    }

    echo round($result,2);


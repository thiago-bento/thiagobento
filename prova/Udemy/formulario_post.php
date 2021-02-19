

<!--
    Dois tra
-->
<div class="titulo"> Desafio logico</div>

<form  action="#" method="post">
    <div>
        <label for="t1"> Trabalho Terça: </label>
        <select name="t1" id="t1">
            <option value="1">Executado</option>
            <option value="0">Não Executado</option>
        </select>
    </div>
    <div>
        <label for="t2"> Trabalho Quinta: </label>
        <select name="t2" id="t2">
            <option value="1">Executado</option>
            <option value="0">Não Executado</option>
        </select>
    </div>

    <button>Executar</button>
</form>
    <style>
    button, select {

        font-size: 1.8rem;
    }
    </style>

    <?php   

    $t1 = $_POST['t1'];
    $t2 = $_POST['t2'];

   

    if($t1  && $t2 ){

        echo " Tv 50 e sorvete";
    }elseif ($t1  || $t2 ){
        echo "TV 32 e sorvetinho";
    }else {
        echo "Ficar em casa";
    }



  ?>
function somar (num1, num2){
    return num1 + num2;
}

function subtrair (num1, num2){
    return num1-num2;
}

function multiplicar (num1, num2){
    return num1*num2;
}

function dividir (num1, num2){
    if (num2 !=0)
        return (num1/num2).toFixed(1);
    else
        return "Nao pode ser 0";
        
}

function calcular (){
 numero1 = parseFloat (document.getElementById ("numero1").value);
 numero2 = parseFloat (document.getElementById("numero2").value);
 operacao = parseFloat (document.getElementById("operacao").value);
 outResult = document.getElementById ("resultado");


    switch (operacao){
        case 1 : calculo = somar(numero1,numero2);break;
        case 2 : calculo = subtrair(numero1,numero2);break;
        case 3 : calculo = multiplicar(numero1,numero2);break;
        case 4 : calculo = dividir(numero1,numero2);break;
    }           

    outResult.innerHTML = calculo; 

}





function verificarMaior(){
    var numero = document.getElementById("num1").value;     
if (numero == 0){
    document.getElementById("demo").innerHTML = "Digite um nuemro";
    }else{
        for (i=0 ; i < numero ; i++){
            var btn = document.createElement("input");
            btn.id = [i];
            document.body.appendChild(btn);
            "<br>";
        }
            for (i=0 ; i < numero ; i++){
            var [i] = document.getElementById("[i]").value;
            }console.log([i])
        
        
        //criaInput();

}console.log(numero);
}




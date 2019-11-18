



function qntNumeros(){
    var numero = document.getElementById("numero").value;     
    if (numero.trim() == 0){
    document.getElementById("demo").innerHTML = "Digite um número";
    document.getElementById("resposta").innerHTML =" ";
    

    }else if (numero > 100){
        document.getElementById("demo").innerHTML = "O número não pode ser maior que 100"; 
        document.getElementById("resposta").innerHTML =" ";
        

    }else{
        document.getElementById ("demo").innerHTML = "Informe os números abaixo depois clique no botão: "+"<br/>"
        for (i=0 ; i < numero ; i++){
            var btn = document.createElement("input");
            btn.id = [i];
            btn.placeholder = "Digite o número "+[i+1];
            btn.className = "outNumeros";
            document.body.appendChild(btn);
            
            document.getElementById("resposta").innerHTML =" ";
            
            
        }

        var outBotaoCalcular = document.createElement("button");
        
         document.body.appendChild(outBotaoCalcular);
         outBotaoCalcular.id = "outBotaoCalcular";
        outBotaoCalcular.innerText = "Verificar";
       
        // outBotaoCalcular = document.createElement ("button");
        // texto = document.createTextNode ("Isto é um botão!");
        // outBotaoCalcular.appendChild (texto);
        // document.getElementById ("numeros").appendChild(outBotaoCalcular);
       
       
        outBotaoCalcular.onclick = function(){
            numero.innerHTML = "";
            valor = 0;
            
            for (var a = 0 ; a < numero ;a++){
                var valornumero = parseInt (document.getElementById([a]).value);
                console.log([a]);  
                if (valornumero > valor){
    
                    valor =valornumero;
                
                }else{
    
                    document.getElementById("resposta").innerHTML ="errorrr";
    
                }
            } document.getElementById("resposta").innerHTML =valor;  
        }

    }
    
    
}            
          


function calcularTabuada(){  

    var total = '';
          
        var multiplicador = document.getElementById("numero").value;
        var numFinal = document.getElementById("numero2").value;
        
        if (numFinal.value || multiplicador.value != null){
            alert("Digite os numeros")
        }else{

        for (var i=1 ; i<=numFinal ; i++) {
            
            result = i*multiplicador;
            
            total+= multiplicador+"x"+i+"="+result+"<br />" ;
                               
        }    
        

        for (var i=1 ; i<=numeroNovo ; i++){
            result = i*multiplicador;
            
            total+= multiplicador+"x"+i+"="+result+"<br />" ;
            
        }
        

    }
    
    document.getElementById ("demo").innerHTML = total;

}

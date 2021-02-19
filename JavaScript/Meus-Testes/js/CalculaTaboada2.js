
function calcularTabuada(){  

    var total = '';
          
        var multiplicador = document.getElementById("multiplicador").value;
        var numFinal = document.getElementById("numFinal").value;
        
        if (numFinal.value || multiplicador.value == null){
           
            for (var i=1 ; i<=numFinal ; i++) {
                
                result = i*multiplicador;
                
                total+= multiplicador+"x"+i+"="+result+"<br />" ;
                                
            }
        }else{

            alert("Digite os numeros")

        }
    
    
    document.getElementById ("demo").innerHTML = total;

}


function ocultar(){
    document.getElementById ("demo").innerHTML = " ";
  } 
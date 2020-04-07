
                    
                   
                    
        

    function calcularTabuada(){  

        var total = '';
        var padrao = confirm(" O valor final da tabuada é 10?");
        if (padrao){
                
                var numeroDigitado = document.getElementById("numero").value;
            

                for (var i=1 ; i<=10 ; i++){
                    
                    result = i*numeroDigitado;
                    
                    total+= numeroDigitado+"x"+i+"="+result+"<br />" ;
                                    
            }    
           
                
        }else{

            var numeroNovo = prompt ("Informe ate que numero será realizada a tabuada ");
            
            var numeroDigitado = document.getElementById("numero").value;
            

            for (var i=1 ; i<=numeroNovo ; i++){
                result = i*numeroDigitado;
                
                total+= numeroDigitado+"x"+i+"="+result+"<br />" ;
                
            }
            

        }
        
        document.getElementById ("demo").innerHTML = total;

    }



            
    function calcularTabuada(){  
        var total = '';
        var x = document.getElementById("numero").value;
        var padrao = confirm(" O valor final da tabuada é 10?");
        

        for (var i=1 ; i<=10 ; i++){
            result = i*x;
            
            total+= i+"x"+x+"="+result+"<br />" ;

            console.log (total);
        }
        document.getElementById ("demo").innerHTML = total;
    }   


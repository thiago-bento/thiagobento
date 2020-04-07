function calcularvalor(){

    var capitalS = parseInt( document.getElementById ("capitalsegurado").value);
    var ano1 = document.getElementById ("select1").value;
   
    //1ª condiçao

    if (capitalS <=160 && capitalS >0 && ano1 == "ano1"){
        
        document.getElementById("resultFinal").innerHTML=("37%");
        
        }else if(capitalS >=161 && capitalS <=350 && ano1 == "ano1"){

            document.getElementById("resultFinal").innerHTML = ("44%");

        }else if(capitalS >=351 && capitalS <=1000 && ano1 == "ano1"){

            document.getElementById("resultFinal").innerHTML = ("50%");
        
        //2ª condicao

        }else if (capitalS <=160 && ano1 == "ano2"){
            
            document.getElementById("resultFinal").innerHTML=("20%");
        
        }else if(capitalS >=161 && capitalS <=350 && ano1 == "ano2"){

            document.getElementById("resultFinal").innerHTML = ("15%");

        }else if(capitalS >=351 && capitalS <=1000 && ano1 == "ano2"){

            document.getElementById("resultFinal").innerHTML = ("10%");
        
            //3ª condicao

        }else if (capitalS <=160 && ano1 == "ano3"){
            
                document.getElementById("resultFinal").innerHTML=("15%");
            
        }else if(capitalS >=161 && capitalS <=350 && ano1 == "ano3"){
        
                document.getElementById("resultFinal").innerHTML = ("7%");
        
        }else if(capitalS >=351 && capitalS <=1000 && ano1 == "ano3"){
        
                document.getElementById("resultFinal").innerHTML = ("5%");


    }else{
        document.getElementById("resultFinal").innerHTML = ("O valor deve ser maior que zero e  menor que 1000");
    }
    
    document.getElementById('capitalsegurado').value='';
}
    
  
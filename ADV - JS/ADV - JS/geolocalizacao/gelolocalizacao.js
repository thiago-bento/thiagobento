
var mPosicao = null;

function teste(){

window.onload = function (){

    // se não possui suporte a geolocalização
    if ("!navigation.geolocation"){
        alert("Voce não possui acesso à geolocalização");
        return;
    }else{
        //otem dados da geolocalização 
        navigator.geolocation.getCurrentPosition(geo_sucesso,geo_erro); //cria duas variaveis
    }

    function geo_sucesso(posicao){

        //obtem os dados e preenche nos seus ID html

        document.getElementById("out_latitude").value;
        posicao.coords.latitude;
    
        
        document.getElementById("out_longitude").value;
        posicao.coords.longitude;

        
        document.getElementById("out_altitude").value;
        posicao.coords.accuracy;

        
        document.getElementById("out_precisao_altitude").value;
        posicao.coords.altitudeAccuracy;

        
        document.getElementById("out_direcao").value;
        posicao.coords.heading;

        
        document.getElementById("out_velocidade").value;
        posicao.coords.speed;

        
        document.getElementById("out_tempo").value;
        posicao.coords.timestamp;

        mPosicao = posicao;

    }


    function geo_erro(err){
        alert(err.message);
    }

    function mapaEstatico(posicao){
        var url = "http://maps.google.com/maps/api/staticmap?center=";
        url +=posicao.coords.latitude+",";
        url +=posicao.coords.longitude+",";
        url +="&zoom=15&size=400x400";
        url +="&markes=color:red|"+ posicao.coords.latitude+",";
        url +=posicao.coords.longitude;
        url = "&sensor=true";
        //criar um objeto imagem
        var img = new Image();
        //define a url na imagem criada
        img.src = url;

        document.getElementById("gmaps").innerHTML = '<center><img style="width:80%; height:auto;" src="'+ url+'"/> </center>'

        document.getElementById("gmaps").className = "mapa-estatico"; // define a classe contendo os parametros css da div gmaps
    
    }

}

function mapaDinamico(posicao){
    if (posicao != null){
        //cria um objeto do tipo infoWindow (do google maps)
        var infoWindow = new google.maps.infoWindow();
        
        //carrega uma instancia do objeto latLng, contendo as informações de latidude e longitude
        var local = new google.maps.LatLng (posicao.coords.latitude, posicao.coords.longitude);

        //difine algumas opção basicas do mapa dinamico
        var opcoes = {zoom:8, center:local, mapTypeId:google.maps.MapTypeId.READMAP };

        //defina a classe contendo os parametros da div gmaps
        document.getElementById("gmaps").className = "mapa-dinamico";

        //cria o objeto responsavel pela geracao do mapa dinamico
        var map = new google.maps.Map (document.getElementById("gmaps"),opcoes);

        //carrega o mapa dinamico para ser exibido
        map.setCenter(local);
        infoWindow.serContent("Mapa Dinâmico");
        infoWindow.serPosition(local);
        infoWindow.open(map);

    }
}
}
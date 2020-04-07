var out_local;
var geocoder;

window.onload = function()
{
	 out_local = document.getElementById("out_local");
	 //Possui suporte a geolocalizacação ?
     if(!navigator.geolocation)
	 {
		 alert("Seu navegador não suporta Geolocalização.");
		 return; 
	 }
	 else
	 {
		  //Obtem os dados de geolocalização
		  navigator.geolocation.getCurrentPosition(geo_sucesso, geo_erro);
  
	 }
}

function geo_sucesso(posicao)
{
	var lat = posicao.coords.latitude;
	var lng = posicao.coords.longitude;
	geocoder = new google.maps.geocoder();
	CidadeLatLng(lat,lng);
}

function CidadeLatLng (lat, lng){
	var latlng = new google.maps.latlng(lat.lng);
	geocoder.geocode({'latLng': latLng}), function (results, status) {
		if (status == google.maps.GeocoderStatus.OK){
			if(results[1]){
				for ( var i=0 ; i<results[0].adress_components.length; i++){
					for (var b=0; b<results[0].adress_components[i].types.length; b++){
						if(results[0].adress_components[i].types[b]=="administrative_area_level_1"){
							city = results[0].adress_components[i];
							break;
						}
					}
				}
				if (city.short_name == "RJ"){
					OcultarTodasAsPecas();
					MostrarPecasDoRJ();
				}
			}else{
				MostrarTodasAsPecas();
			}
		}else{
			alert ("Geocoder falhou. Status: "+ status);

		}
	}
}

function geo_erro(err)
{
	MostrarTodasAsPecas();
}

function MostrarOcultar(classe, opcao_display)
{
    box_pecas_teatro = document.getElementsByClassName(classe);
	
	for(var i = 0; i < box_pecas_teatro.length ; i++)
	{
	    	box_pecas_teatro[i].style.display = opcao_display;
	}
}

function OcultarTodasAsPecas()
{
    MostrarOcultar("box-peca","none");
}

function MostrarTodasAsPecas()
{
	MostrarOcultar("box-peca","inline-block");
	out_local.innerHTML = "Brasil";
}

function MostrarPecasDoRJ()
{
	MostrarOcultar("RJ","inline-block");
	out_local.innerHTML = "Rio de Janeiro";
}
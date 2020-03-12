
class DataHelper {
    constructor() {

    throw new Error ('Esta classe náo pode ser instanciada' ); // com isso naó pode ser criado um variavel = new DataHelper, ou seja, nao pode isntancia-la
    }

    static dataParaTexto(data){


       return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        
    }



    static textoParaData(texto){

        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) // se a data náo estiver neste formato
        
         throw new Error('Deve estar no formato aaaa-mm-dd'); // retornará esta ,sg

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }

    


}
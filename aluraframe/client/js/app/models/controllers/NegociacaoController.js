class NegociacaoController {

    constructor () {

        let $ = document.querySelector.bind(document); //mantem a variavel com o $ p/ pegar o queryselector
        this._inputData = $ ('#data');
        this._inputQuantidade = $ ('#quantidade');
        this._inputValor =$ ('#valor');
        
        
    }

    adiciona(event) {

        event.preventDefault();
            
         let negociacao = new Negociacao (
            DataHelper.textoParaData(this._inputData.value),
             this._inputQuantidade.value,
             this._inputValor.value
            );

            console.log(negociacao);
            console.log(DataHelper.dataParaTexto(negociacao.data));
    }


  

}
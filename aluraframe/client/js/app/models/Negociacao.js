class Negociacao {

    constructor (data , quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);    //congela as propriedades do this.
    
    }

    get volume () {     // Metodo = Função dentro de uma classe, armazena o conteudo da variavel.

        return this._quantidade * this._valor;  //construtor do volume
    }
            

    get data() {        // Metodo = Função dentro de uma classe, armazena o conteudo da variavel.

        return new Date(this._data.getTime());
    }

    get quantidade() {      // Metodo = Função dentro de uma classe, armazena o conteudo da variavel. 

        return this._quantidade;
    }

    get valor() {      // Metodo = Função dentro de uma classe, armazena o conteudo da variavel.

        return this._valor;
    }
}


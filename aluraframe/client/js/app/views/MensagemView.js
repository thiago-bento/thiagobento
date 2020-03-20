class MensagemView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _tamplate(model) {

        return `<p class = "alert alert-info> ${model.texto}</p>`
    }

    update(model) {

        this.elemento.innerHTML = this._template(model);
    }
}
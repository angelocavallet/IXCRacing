class Fase {

    constructor() {
        this.elementos = [];
        this.terminou = false;
    }

    addElemento(elemento) {
        this.elementos.push(elemento);
    }

    load() {
        console.error('Fun��o "load" n�o implementada!');
    }

    update() {

        this.elementos = this.elementos.filter((elemento) => {

            elemento.update();

            return !elemento.terminou ? elemento : false;
        });

    }

}
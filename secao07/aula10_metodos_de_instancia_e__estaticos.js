class Carro{
    constructor(modelo){
        this._marca = Carro.retornarMarca;
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimirDados(){
        console.log(`${this.marca} ${this.modelo}`);
    }

    static retornarMarca(){
        return 'Honda';
    }
}

// const fit = new Carro('Fit');
// fit.imprimirDados();
// console.log(fit.marca);


// Método estático

console.log(Carro.retornarMarca());

// Object.defineProperty();  // Classe Object - Método defineProperty

// console.log(Math.random()); // Objeto Math - Método random

// console.log(Math.PI); // Objeto Math - Método PI
"use strict";
class Categoria {
    id;
    nome;
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}
class Produto {
    nome;
    preco;
    categoria;
    constructor(nome, preco, cat) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = cat || new Categoria(0, "Sem Categoria");
    }
    getDados() {
        return this.nome + "\nPreço: " + this.preco + "\nCategoria: " + this.categoria.nome;
    }
    imprimir() {
        console.log(`${this.nome} - Preço: ${this.preco}`);
    }
    setPreco(preco) {
        if (preco >= 0) {
            this.preco = preco;
        }
    }
}
class Perecivel extends Produto {
    temperaturaMaxima;
    constructor(nome, preco, tempMaxima) {
        super(nome, preco);
        this.temperaturaMaxima = tempMaxima || 25;
    }
    setTemperaturaMaxima(temp) {
        if (temp > 0) {
            this.temperaturaMaxima = temp;
        }
    }
    getTemperaturaMaxima() {
        return this.temperaturaMaxima;
    }
    getDados() {
        return super.getDados() + "\nTempMax: " + this.temperaturaMaxima;
    }
}
let prod = new Produto("Coca-cola", 11.99);
prod.setPreco(9.99);
prod.imprimir();
let prodPerecivel = new Perecivel("Alface", 5.99);
console.log(prodPerecivel.getDados());
class Categoria{
    id : number;
    nome : string;

    constructor( id: number, nome: string){
        this.id = id;
        this.nome = nome;
    }
}

class Produto{
    nome : string;
    preco : number;
    categoria : Categoria;

    constructor( nome:string, preco: number, cat?: Categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = cat || new Categoria(0, "Sem Categoria");
    }

    getDados(): string{
        return this.nome + "\nPreço: " + this.preco + "\nCategoria: " + this.categoria.nome;
    }

    imprimir(): void{
        console.log( `${this.nome} - Preço: ${this.preco}` );
    }

    setPreco(preco:number):void{
        if( preco >= 0){
            this.preco = preco;
        }
    }

}

class Perecivel extends Produto{
    private temperaturaMaxima: number;
    constructor(nome: string, preco: number, tempMaxima?: number){
        super(nome, preco);
        this.temperaturaMaxima = tempMaxima || 25;
    }
    setTemperaturaMaxima( temp: number): void{
        if (temp > 0){
            this.temperaturaMaxima = temp;
        }
    }
    getTemperaturaMaxima(): number{
        return this.temperaturaMaxima;
    }

    getDados(): string {
        return super.getDados() + "\nTempMax: " + this.temperaturaMaxima;
    }
}


let prod = new Produto("Coca-cola" , 11.99 );
prod.setPreco( 9.99 );
prod.imprimir();

let prodPerecivel = new Perecivel("Alface", 5.99 );
console.log( prodPerecivel.getDados() )
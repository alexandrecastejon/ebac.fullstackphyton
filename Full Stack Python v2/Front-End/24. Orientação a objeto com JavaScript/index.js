// Classe base (abstração)
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

// Classe herdeira 1
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}, Portas: ${this.portas}`;
    }
}

// Classe herdeira 2
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}, Cilindradas: ${this.cilindradas}cc`;
    }
}

// Instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla", 2020, 4);
const carro2 = new Carro("Honda", "Civic", 2022, 4);
const moto1 = new Moto("Yamaha", "MT-07", 2021, 689);

// Exibindo os detalhes
console.log(carro1.exibirDetalhes());
console.log(carro2.exibirDetalhes());
console.log(moto1.exibirDetalhes());
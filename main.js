// Classe abstrata
function Veiculo(tipo) {
    if (new.target === Veiculo) {
        throw new Error("Classe abstrata 'Veiculo' não pode ser instanciada diretamente.");
    }
    this.tipo = tipo;
    this.acelerar = function() {
        console.log("Vrum");
    };
}

// Classe Carro herda de Veiculo
function Carro(marca, modelo) {
    Veiculo.call(this, 'Carro');
    this.marca = marca;
    this.modelo = modelo;
}

// Estabelecendo a herança
Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

// Classe Moto herda de Veiculo
function Moto(marca, modelo) {
    Veiculo.call(this, 'Moto');
    this.marca = marca;
    this.modelo = modelo;
}

// Estabelecendo a herança
Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

// Criação de instâncias
const carro1 = new Carro('Toyota', 'Corolla');
const carro2 = new Carro('Honda', 'Civic');
const moto1 = new Moto('Yamaha', 'XTZ');

console.log(carro1);
carro1.acelerar(); // Saída: "Vrum"

console.log(carro2);
carro2.acelerar(); // Saída: "Vrum"

console.log(moto1);
moto1.acelerar(); // Saída: "Vrum"



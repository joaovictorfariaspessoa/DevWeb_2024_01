// Classes
class Carro {
    constructor(nome, ano) {
    this.nome = nome;
    this.ano = ano;
    }
    }
    // Intanciando objetos à classe
    let meuCarro1 = new Carro('Ford', 2014);
    let meuCarro2 = new Carro('Audi', 2019);
    //Imprimindo valores
    console.log(meuCarro1.nome);
    console.log(meuCarro1.ano);
    console.log(meuCarro2.nome);
    console.log(meuCarro2.ano);

// Declarar nova classe com métodos
console.clear();
class NovoCarro {
constructor(nome, ano) {
this.nome = nome;
this.ano = ano;
}
idadeCarro(ano) {
return ano - this.ano;
}
}
//Buscando o ano atual automaticamente
let dataHoje = new Date();
let ano = dataHoje.getFullYear();

// Intanciando o objeto à classe
let meuNovoCarro = new NovoCarro('Ford', 2014);
console.log(meuNovoCarro.idadeCarro(ano));

// Mais um exmeplo de classe
console.clear();
class ClassePessoa {
constructor(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
}
getBirthYear() {
return this.dob.getFullYear();
}
getFullName() {
return `${this.firstName} ${this.lastName}`;
}
}
    
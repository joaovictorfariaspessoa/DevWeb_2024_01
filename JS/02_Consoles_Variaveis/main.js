let nome = "João Victor";
let altura = 1.78; // em metros
let peso = 60; // em quilogramas

// Calculando o IMC (peso / altura)
let imc = peso / (altura * altura);

// Construindo a frase usando Template String
let frase = `Meu nome é ${nome}, tenho ${altura} altura e peso ${peso} quilos, meu IMC atual é de ${imc.toFixed(2)}.`;

// Mostrando a frase no console do navegador
console.log(frase);
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    ];
    console.log('Antes:');
    console.log(matrix1);

    // Alterando um valor do array
console.clear();
matrix1[0][2] = -10;
console.log('Depois:');
console.log(matrix1);

//Métodos .tostring
console.clear();
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);
let numArray2 = numArray.toString();
console.log(typeof numArray2);

//Método de Arrays - Join

console.clear();
let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(' *** ');
console.log(teste2);
console.log(typeof teste2);

//Tamanho de Array - length
console.clear();
let array = [0, 1, 2, 3, 4];
console.log(array.length);

// Remover e inserir elementos
// pop()
console.clear();
const frutas1 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let x = frutas1.pop(); 
console.log(frutas1);
console.log(x);

// push()
console.clear();
const frutas2 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let y = frutas2.push('Kiwi'); 
console.log(frutas2);
console.log(y);

// shift()
console.clear();
const frutas3 = ['Banana', 'Laranja'];
let z = frutas3.shift(); 
console.log(frutas3);
console.log(z);

// unshift()
console.clear();
const frutas4 = ['Banana', 'Laranja'];
let w = frutas4.unshift('Kiwi'); 
console.log(frutas4);
console.log(w);

// delete
console.clear();
const frutas5 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
delete frutas5[2];
console.log(frutas5);

// Funções
console.clear()
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
   }
   
let j = addNums(4, 5); 
console.log(j);

let i = myFunc(4, 5); 
console.log(i);

function myFunc(num1, num2) {
    return num1 * num2;
   }

// Arrow function
console.clear();
const hello = () => {
    return 'Salve Rapaziada!';
}
console.log(hello);
console.log(hello());

console.clear();
const addNums2 = (num1 = 1, num2 = 1) => {
return num1 + num2;
};
let soma = addNums2(5, 10);
console.log(soma);















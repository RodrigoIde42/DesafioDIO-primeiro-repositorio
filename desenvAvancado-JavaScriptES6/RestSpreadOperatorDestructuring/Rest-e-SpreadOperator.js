// Aprendendo o Rest

// Somando n valores em uma função:
// Utilizando a maneira antiga:

function oldSum(a, b){
    var value = 0;

    for (let i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(oldSum(5, 5, 5, 2, 3));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Utilizando Rest Operator

function sum(...args){
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(5, 5, 5, 2, 3));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Utilizando rest para pegar o restante

const rest = (a, b, ...rest) => {
    console.log(a, b, rest);
}

rest(5, 5, 5, 2, 3);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Aprendendo Spread Operator

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sumNumbers = (...rest) => {
    return multiply(...rest);
}

console.log(sumNumbers(5, 5, 5, 2, 3));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Pode-se usar Spread Operators em:
// Strings, arrays, literal objects e objetos iteraveis

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(...args){
    console.log(args);
}

logArgs(...str);
logArgs(...arr);

// Concatenando com concat
var arr2 = arr.concat([5, 6, 7]);
console.log(arr2);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Concatenando com Spread Operator
arr2 = [...arr, 5, 6 ,7];
console.log(arr2);

arr2 = [5, 6, 7, ...arr];
console.log(arr2);

const arr3 = [...arr2, ...arr, 0, 0, 0];
console.log(arr3);

// Clonando arrays
const arrClone = [...arr];
console.log(arrClone);

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);
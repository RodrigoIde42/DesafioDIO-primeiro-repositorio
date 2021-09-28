// Maneiras de lidar com undefined na função

// Nesse caso, se alguma das variáveis for undefined, resultará em NaN (Not a Number).

function multiply(a, b){
    return a * b;
}

console.log(multiply(5));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Caso b seja undefined, na leitura b = b || 1, b será considerado falso, logo receberá 1

function otherMultiply(a, b){
    b = b || 1;

    return a * b;
}

console.log(otherMultiply(5));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function mult(a, b){
    b = typeof b === 'undefined' ? 1 : b;

    return a * b;
}

console.log(mult(5));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function multi(a, b = 1){
    return a * b;
}

console.log(multi(5));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Tem importancia a ordem dos parâmetros

function Multiply(a, b = a){
    return a * b;
}

console.log(Multiply(5));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Lazy evaluation

function randomNumber(){
    console.log('Generating random number...');
    return Math.random() * 10;
}

function oneMoreMultiply(a = randomNumber(), b = randomNumber()){
    return a * b;
}

console.log(oneMoreMultiply(5));
console.log(oneMoreMultiply(5));
console.log(oneMoreMultiply(undefined, 5));
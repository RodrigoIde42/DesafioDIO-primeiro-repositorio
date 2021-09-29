
// Um exemplo de atribuição de variáveis para cad indice do vetor antes da atualização do ECMA6

var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

// O mesmo exemplo com Destructuring Assignment

var [apple2, banana2, orange2] = [
    'Apple', 
    'Banana', 
    'Orange',
];

console.log(apple, apple2);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// -----------------------------

var [apple2, banana2, orange2, [tomato2]] = [
    'Apple', 
    'Banana', 
    'Orange',
    ['Tomato']
];

console.log(tomato2);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Diferença entre objeto e array no destructuring

arr = ['Apple', 'Orange'];
var obj = {
    name: 'Celso',
    name2: 'Claudio'
}
var name = obj.name;

console.log(name);

// Com destructuring 

var { name2 } = obj;

console.log(name2);

var [apple2] = arr;
var { name2: name3 } = obj;

console.log(name3);
console.log(apple2);

name3 = 'Henrique';
console.log(obj);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Diferença com o props

arr = ['Apple', 'Orange'];
var obj = {
    name: 'Celso',
    name2: 'Claudio',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
}

var age = obj.props.age;

console.log(age);

// Com destructuring 

var [apple2] = arr;
var { name2: name3 } = obj;
var {props: { age: age2, favoriteColors: [color1, color2] }} = obj;

console.log(age2);
console.log(color1, color2);

// -=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Caso de objeto dentro de array

var arr = [{name: 'Apple', type: 'Fruit'}];

var fruit1 = arr[0].name;

console.log(fruit1);

// Com destructuring

var [{name: fruitName, type: fruitType}] = arr;

console.log(fruitName, fruitType);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Aplicando destructuring com functions

function sum(arr){
    return arr[0] + arr[1];
    /*
    ou
    a = arr[0];
    b = arr[1];
    return a + b; 
    */
}

console.log(sum([5,5]));

// Com destructuring

function sum([a, b] = [0, 0]){
    return a + b
}

console.log(sum());
//    Formas de escrever uma função

function log(value){
    console.log(value);
}

log('test');

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var log = function(value){
    console.log(value);
}

log('test');

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var oldSum = function(a, b){
    return a + b;
}

console.log(oldSum(5, 5));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function Car(){
    this.foo = 'bar';
}

console.log(new Car());

//         Arrow Functions

var sum = (a, b) => a + b;
console.log(sum(5, 15));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var createObj = () => ({ test: 123 });
console.log(createObj());

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Não funciona:

// Criar objeto através da arrow function

/*
var Car = () => {
    this.foo = 'bar';
}

console.log(new Car())
*/

// Hoisting de função

/*
log('teste')

var log =  value => {
    console.log(value);
}
*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var obj = {
    showContext: function showContext(){
        this.log('teste');

        setTimeout(() => {
            this.log('After 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
}

obj.showContext();
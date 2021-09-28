// Escrevendo objetos literais

var obj = {
    prop1: 'Digital Innovation One'
};

console.log(obj);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Referenciando uma variável:

prop1 = 'Digital Innovation One';

var obj = {
    prop1
};

console.log(obj);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Também funciona chamar funções no objeto

function method1(){
    console.log('method called!');
}

var obj = {
    method1
};

obj.method1();

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Pode-se criar a função dentro do objeto

var obj = {
    sum: function sum(a, b){
        return a + b;
    }
}

console.log(obj.sum(5, 5));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Outro meio de fazer o mesmo que antes

var obj = {
    sum(a, b){
        return a + b
    }
}

console.log(obj.sum(5, 6));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var propName = 'test';

var obj = {
    [propName + 'concat']: 'prop value'
}

console.log(obj);
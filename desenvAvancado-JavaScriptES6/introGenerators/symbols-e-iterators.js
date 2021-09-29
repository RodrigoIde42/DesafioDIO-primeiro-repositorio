// Symbols

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2);

var obj = {
    [uniqueId]: 'Hello'
}

console.log(obj);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Well known Symbols

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const it = arr[Symbol.iterator]();

for (let value of arr){
    console.log(value);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Tornando objeto iterável com symbol iterator

const newObj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i ++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };

    }
}

const newIt = newObj[Symbol.iterator]()
console.log(newIt.next());

for (let value of newObj){
    console.log(value);
}

const arr2 = [...newObj];
console.log(arr2);
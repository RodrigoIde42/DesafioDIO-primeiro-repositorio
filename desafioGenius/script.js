let order = [];
let clickedOrder = [];
let score = 0;

// 0 -> green
// 1 -> red
// 2 -> yellow
// 3 -> blue

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
}
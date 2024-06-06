
// let card1 = document.querySelector('.card1');
// let card2 = document.querySelector('.card2');
// let card3 = document.querySelector('.card3');


// function styleTheCard(width, height, backgroundColor, ){
//     this.width = width;
//     this.height = height;
//     this.backgroundColor = backgroundColor
// }

// let card1Style = new styleTheCard('300px', '300px', 'red');
// let card2Style = new styleTheCard('300px', '300px', 'green');
// let card3Style = new styleTheCard('300px', '300px', 'pink');




// function applyStyle(element, style) {
//     element.style.width = style.width;
//     element.style.height = style.height;
//     element.style.backgroundColor = style.backgroundColor;
// }

// document.getElementById('applyStylesButton').addEventListener('click', () => {
  

//     applyStyle(card1, card1Style);
//     applyStyle(card2, card2Style);
//     applyStyle(card3, card3Style);
// });



// let arr = new Array();

// let fruits = [ 'apple', 'banana', {name:'khalida', age:22}, 'strawberry']


// console.log(fruits.at(-1));
// console.log(fruits.pop())
// console.log(fruits)


// let fruit = fruits.find(fruit => {
//     console.log(fruit);
// })


// let numbers = [100,3,60, 4, 32,7,0];
// console.log(numbers.sort( (a,b) => {
//     return a - b;
// }));





let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [2,4,6,8,10];

let all = arr1.concat(arr2);

let same = all.filter((item, index) =>{
    return all.indexOf(item) !== index;
})

console.log(same);

// let mySet = new Set(all);
// console.log(mySet);

let arr1Set = new Set(arr1);
let samesies = arr1.filter(item => arr1Set.has(item))


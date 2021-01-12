'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍓', '🥝'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits.length - 1); // 제일 마지막 index 값 출력

// 3. Looping over an array
// print all fruits
// a. for of
console.clear();
for(let fruit of fruits) {
    console.log(fruit);
}

// // b. forEach : 콜백함수 호출
// fruits.forEach(function(value, index, array) {   // array는 보통 안 받아옴
//     console.log(fruit, index, array);
// });
fruits.forEach((fruit) => console.log(fruit)); // arrow function

// 4. Addtion, deletion, copy
// push: add an item on the end
fruits.push('🍊', '🍋');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍏', '🍐');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// Note!! shift, unshift are slower than pop, push -> pop, push를 더 권장(빠르니까)
// big O와 관련된 이야기
// splice: remove an item by index position
fruits.push('🍑', '🍒', '🍉'); // 이모지도 문자열
console.log(fruits);
// splice(시작 인덱스, 삭제 개수) : 원하는 개수를 입력하지 않으면 지정된 인덱스 이후로 다 지워버림
fruits.splice(1, 1); // 1 index remove
console.log(fruits); 
fruits.splice(1, 1, '🍌', '🍍'); // 삭제 or 원하는 자리에 값을 추가할 수 있음
console.log(fruits); 

// combine two arrays
const fruits2 = ['🍅', '🍇'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // fruits + fruits2 

// 5. Searching
// indexOf: find the index
//console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍍')); 
console.log(fruits.indexOf('🍌'));
console.log(fruits.indexOf('🍏')); // 없는 값이면 -1 반환

// includes: true/false
console.log(fruits.includes('🍒'));
console.log(fruits.includes('🍏'));  

// lastIndexOf
//console.clear();
fruits.push('🍓');
console.log(fruits);
console.log(fruits.indexOf('🍓')); // indexOf: 처음 찾은 값의 index 반환
console.log(fruits.lastIndexOf('🍓')); // lastIndexOf: : 마지막에 찾은 값의 index 반환

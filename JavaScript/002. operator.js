'user strick';
// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 

''''
1 + 2 = ${1 + 2}`);

console.log("mk's \n\tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators : java랑 동일함
let counter = 2;
const preIncrement = ++counter; // 3
// counter = counter + 1;
// preIncrement = counter; -> 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; // 3
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or) : 처음으로 true 만나면 멈춤 -> value1이 ture일 경우 나머지는 출력 안됨
// true를 만나면 자기는 true라고 생각하므로, 많이 연산할 땐 true는 마지막에 배치하기!
console.log(`or: ${value1 || value2 || check()}`);

// &&(and) : 처음 false를 만나면 멈춤
// false를 만나면 자기는 false라고 생각하므로, 많이 연산할 땐 false를 마지막에 배치하기!
console.log(`and: ${check() && value1 && value2}`);

// null체크할 때도 많이 쓰임
// nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for(let i = 0; i < 10; i++){
        // wasting time
        console.log('😫');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion : type 변경해서 검사함(값 자체 비교)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strick equality, no type conversion : type 신경써서 검사함(권장)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const mika1 = {name: 'mika'};
const mika2 = {name: 'mika'};
const mika3 = mika1;
console.log(mika1 == mika2); // ref(주소값)이 달라서 false
console.log(mika1 === mika2); // ref(주소값)이 달라서 false
console.log(mika1 === mika3); // ref(주소값)이 같아서 true

// equality - puzzler
console.log(0 == false); // t
console.log(0 === false); // f type이 boolean 아님
console.log('' == false); // t
console.log('' === false); // f type이 boolean 아님
console.log(null == undefined); // t
console.log(null === undefined); // f type이 boolean 아님

// 8. Conditional operators : if
// if, else if, else
const name = 'df';
if(name === 'mika'){
    console.log('Welcom, Mika');
} else if(name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('nuknown');
}

// 9. Ternary operator: ?  삼항연산자
// condition ? value1 : value2;
console.log(name === 'mika' ? 'yes' : 'no');

// 10. Switch statemnet
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('like you!');
        break;
    default:
        console.log('same all!');
        break;
    
}

// 11. Loops
// while loops, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i -2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops : loop 겹쳐서 쓰기 -> big O가 n의 2이라 cpu에 좋지 않아서 피하는게 좋음
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate form 0 to 10 and print only even numbers(use continue)
for(let i = 0; i < 11; i++){ // 10까지 체크해야 하니까 11까지 돌아야함
    if(i%2 !== 0){
        continue;   
    }
    console.log(`q1: ${i}`); // 원하는 값이 나올때만 출력하는 방법이 더 효율적
}

// Q2. iterate from 0 to 10 and print numbers util reaching 8(use break)
for(let i = 0; i < 11; i++){
    if(i === 8){
        break;
    }
    console.log(`q2: ${i}`);
}



'use strict';
// Function
// - fundamental building block in the program 
// - subprogram can be used multiple times 
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2){body... return;}
// one function === one thing
// naming: doSomething, command, verb(동사)
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

// 매개변수를 통해 함수 호출 시 다른 값 출력하도록 만드는 것이 좋은 함수
// JS에서는 type이 명시되지 않아서 무슨 type의 date를 받을 지 모름 -> typescript가 보완
function log(message){
    console.log(message);
}
log('Hi!');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const mika = {name: 'mika'}; // mika는 {name: 'mika'}의 주소값(ref)가 담겨있음
changeName(mika); // mika.name = 'coder'로 변경됨
console.log(mika);// changeName()로 인해서 mika의 ref가 가리키는 name의 값은 'coder'로 변경됨

// 3. Default parameters(added in ES6)
function showMessage(message, from = 'unknown'){  // 정의되지 않을 때 default값을 설정할 수 있음
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // from은 정의되지 않아서 undefined로 출력

// 4. Rest parameters (added in ES6)
function printAll(...args){ // 배열 형태로 전달됨
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // for in문과 비슷 
    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'conding', 'ellie');

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다
let globalMessage = 'global'; // global variavle
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable -> 현재 함수의 block 안에서만 출력가능
    console.log(globalMessage);
    function printAnother(){
        console.log(message); // 상위 함수의 변수는 하위 함수에서 출력가능(closer)
        let childMessage = 'hello'; // 현재 함수(하위 함수) block 밖에서는 출력 불가능
    }
    // console.log(childMessage); // error
    return undefined; // 일반적으로 return 값이 없으면 undefined가 생략된 것
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b; // 모든 함수는 return 값이 있음
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad 
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

// good : 조건 안맞는 상황에서 빨리 return해서 빠져나오고 그 아래에 필요한 조건의 logic 작성
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// Frist-class function
// functions are treated like any other variable
// can be assigned as a value to variable -> 다른 변수처럼 값으로 할당 가능
// can be passed as an argument to other functions. -> 인자로 전달 가능
// can be returned by another function -> return값으로 사용 가능

// 1. Function experssion
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it. -> 선언되기 전에 출력가능(호이스팅)
const print = function(){ // anonymous function (무명함수) <-> named function(이름 있는 함수)
    console.log('print');
};
print(); // function을 변수에 담으면 그 변수도 function처럼 호출 가능해짐!
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression -> function들을 인자로 받아서 호출하는 방식
function randomQuiz(answer, printYes, printNo){
    if(answer === 'like you'){
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('yes!');
}

// named function
// better debugging in debugger's stack traces(디버깅할 때 보기 편함)
// recursions : 자신 안에서 자신을 또 부르는 것 -> 특별할 때 외에는 사용X 프로그램 죽음
const printNo = function print(){
    console.log('no!');
   // print();
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('like you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
};

// 한 줄 일때는 block({})이 필요없지만, 
// 두 줄 이상이면 block과 return을 써줘야 함
const simpleprint = () => console.log('simplePrint!');
// const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
// function을 선언과 동시에 호출하는 것 -> 자주 쓰이지는 않음
(function hello(){
    console.log('IIFE');
})();


// Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
const add = (a, b) => console.log(a + b);
const substract = (a, b) => console.log(a - b);
const divide = (a, b) => console.log(a * b);
const multiply = (a, b) => console.log(a / b);
const remainder = (a, b) => console.log(a % b);

add(1, 2);
substract(2, 1);
divide(1, 2);
multiply(8, 2);
remainder(10, 3);

function calculate(command, a, b){
    switch(command){
        case 'add':
            return a + b;
            break;
        case 'substract':
            return a - b;
            break;
        case 'divide':
            return a / b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'remainder':
            return a % b;
            break;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 1, 2));

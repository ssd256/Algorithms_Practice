'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value};

// 1. Literals and properties 
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
 
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const mika = {name: 'mika', age: 4}; // class 없어도 바로 객체를 만들 수 있음
print(mika);

// javascript는 타입이 Runtime일 때 동적으로 할당됨 -> 정의된 객체의 속성을 추가/삭제할 수 있음!
// 유지보수에 부적합해서 자주사용X
mika.hasJob = true;
console.log(mika.hasJob); // true

delete mika.hasJob;
console.log(mika.hasJob); // undefined

// 2. Computed properties : []
// key should be always string
// []를 통해 배열처럼 key에 접근 가능
// 필요한 key의 값이 정해지지 않고 Runtime에서 결정될 때 사용
// 실시간으로(동적으로) key의 값을 받아올 때 사용
console.log(mika.name);
console.log(mika['name']); // string으로 쓰지 않으면 undefined 출력됨
mika['hasJob'] = true;
console.log(mika.hasJob); 

function printValue(obj, key){
    // 코드 작성하는 시점에서는 key가 정의되지 않음(undefined) -> 호출시에 정의됨[Runtime]
    console.log(obj.key); 
    console.log(obj[key]);
}
printValue(mika, 'name');
printValue(mika, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = MakePerson('mika', 10);
console.log(person4);

// javascript에서 class가 없을 때 썼던 Template
function MakePerson(name, age){
    return {
        // 매개변수와 속성의 이름이 같으면 선언만해도 됨 -> name: name 이게 생략
        name,
        age,
    };
}

// 4. Constructor Function : 생성자 함수
const person5 = new Person('mika', 10);
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check(key in obj) [true/false]
console.log('name' in mika);
console.log('age' in mika);
console.log('random' in mika);
console.log(mika.random); // undefined

// 6. for..in vs for..of
// for(key in obj)
//console.clear(); // 콘솔 지움
// 모든 key들을 받아옴
for (let key in mika){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'mika', age: 20};
const user2 = user; // 주소(ref) 복사
user2.name = 'coder'; // 원래 객체의 속성의 값도 변경되버림
console.log(user);

// 연습
// const user = [{name: 'mika', age: 20}, {name: 'mika2', age: 40}];
// const user5 = [];
// for(let result of user){
//     user5 = result;
// }
// console.log(user5);

// old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user); // assign(담을 곳, 복사할 것) 
console.log(user4);
const user6 = Object.assign([], user);
console.log(user6);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 겹치는 속성이 있을 경우 뒤에오는 값으로 덮어씌워짐
console.log(mixed.color); // blue
console.log(mixed.size); // big

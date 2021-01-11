// 바닐라 javascript는 매우 유연
// ECMASCript 5에 추가된 문법
// 상식적인 상태에서 개발하도록 설정(다른 언어처럼 변수 선언 후 값 할당 등의 상식)
// 빠르게 javascript 분석해서 성능개선에도 도움
'use strict';
console.log(age);
// 2. Variable : 변경될 수 있는 변수, rw(read/write)
// let (ES6에서 추가된 문법) 
// 기존 변수처럼 선언 후 값 할당하고 값 변경할 수 있음(mutable data type)
let globalName = 'global name';
{
    let name = 'mika';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);    
}
console.log(name);
console.log(globalName);

// var : 선언 전에도 값을 할당하거나 출력이 됨[undefined]
// var hoisting : 어디에서 선언했는지 상관없이 항상 맨 위로 끌어올려줌
// block scope를 무시
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant : 선언과 동시에 값을 할당하면 값을 변경할 수 없음, r(read)
// 바뀔일이 없으면 왠만해서는 const를 사용하는 것을 권장
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : 값을 변경할 수 없는 데이터 타입 ex. premitive types, frozen objects
// Mutable data types : 값을 변경할 수 있는 데이터 타입 ex. all objects(JS에서 대체적으로 objects는 모두 변경 가능)
// favor immutable data type always for a few reasons:
// - security(안정성)
// - thread safety(스레드 안정성) : 변수에 동시접근해서 값이 변하지 못함
// - reduce human mistakes : 사람 에러 줄임

// 4. Variable types
// primitive : 더 이상 나눠질 수 없는 한 가지 아이템
// primitive, single item : number, string, boolean, null, undefiend, symbol
// object, box container : single item을 한 단위, 한 박스로 묶어서 관리
// function, first-class function : java에서처럼 데이터타입으로 매개변수로써 전달 가능
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numerice values: infinity, -infinity, NaN
// DOM에서 연산의 값을 확인할 때 사용
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt : 새로 추가된 문법. 크롬과 파이어폭스만 적용가능
const bigInt = 1234556781234567812345n; // over (-2**53) ~ (2**53)까지 가능 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.Max_SAFE_INTEGER;

// string
// ``(back tag)를 이용하면 ``안의 문자열도 그대로 출력해서 간편함
const char = 'c';
const bread = 'bread';
const purpleBread = 'purple ' + bread; // 변수에 값 추가도 가능
console.log(`value: ${char}, type: ${typeof char}`);
console.log(`value: ${bread}, type: ${typeof bread}`);
console.log(`value: ${purpleBread}, type: ${typeof purpleBread}`);
const holloBread = `hi ${bread}!`;  // template literals(string)
console.log(`value: ${holloBread}, type: ${typeof holloBread}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const eatMeal = true;
const test = 3 < 1; // false
console.log(`value: ${eatMeal}, type: ${typeof eatMeal}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null : 선언 후 null값 할당 -> 변수가 비어있음
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined : 선언 후 값을 할당하지 않음 -> 변수가 비었는지 모름
let x; // 변수에 undefiend를 넣어도 같은 결과
console.log(`value: ${x}, type: ${typeof x}`);

// symbol : create unique identifiers for objects[고유 식별자]
// map이나 다른 자료구조 등에서 고유한 식별자가 필요한 경우
// 동시다발적으로 발생되는 코드에서 우선순위를 주고 싶을 때
// 고유 식별자를 string를 사용하는 경우도 있지만
// 다른 모듈이나 파일에서 동일한 string을 썼을 때 동일한 식별자로 취급[symbol과의 차이점]
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // F 동일한 symbol로 만들어도 다르게 만들어짐
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); // T  for를 사용하면 동일한 symbol로 만들어짐
// symbol 출력 시 description를 통해 string로 변환해야 출력가능함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const rabbit = {name: 'tami', age: 5};
rabbit.age = 10; // rabbit의 객체 내부의 속성은 값 변경 가능

// 5. Dynamic typing : dynamically typed language
// 이를 보완하기 위해 typescript를 사용
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0));

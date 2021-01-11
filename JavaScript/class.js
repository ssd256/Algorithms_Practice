'use strict';
// Object-oriendted programming
// class : template
// objce : instance of a class
// JavaScript classes : ES6 전에는 그냥 객체를 만들거나 function 통해서 객체를 생성함
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance : 프로토타입에 씌워진 문법

// 1. Class declarations
class Person{
        // constructor : 생성자
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const mika = new Person('mika', 10);
console.log(mika.name);
console.log(mika.age);
mika.speak(); // function은 .으로 호출

// 2. Getter and setters : 코드작성 시 개발자가 의도한 결과를 도출할 수 있도록 사용하는 것
class User{
    constructor(fristName, lastName, age){
        this.fristName = fristName;
        this.lastName = lastName;
        this.age = age;
    }

    // setter로 field variable에 value가 담김 
    // setter가 반복 호출되는 것을 방지하기 위해 field variable 변수이름을 다르게 설정함
    get age(){
        return this._age;
    }

    set age(value){
        // if(value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;   
    }
}

const user1 = new User('May', 'job', -1); // 모르고 age를 -1로 작성하는 등의 실수를 방지하는 것
console.log(user1.age);

// 3. Fields(public, private)
// Too soon! : 너무 최신문법이라 사파리에서도 적용안됨. Babel 이용해야 됨
class Experiment{
    publicField = 2; // public 
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // 외부에서는 접근이 안되서 undefined로 출력됨

// 4. Static properties and methods
// Too soon!
// static은 class에 붙어있기 때문에 class로 접근해야 사용가능!
// object와 상관없이 공통적으로 쓰이는 값이나 기능의 경우 사용하기에 적합
class Article{

    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){ 
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher);  // object로 접근하면 undefined 출력됨
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance(상속)
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();   // 부모의 draw()도 호출
        console.log('🔺')// 부모의 draw() 오버라이딩(재정의) -> 다형성!
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
    toString(){
        console.log(``)
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
console.log(triangle.toString());

// 6. Class checking: instanceOf [true/false]
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t -> 상속받아서
console.log(triangle instanceof Object);  //t












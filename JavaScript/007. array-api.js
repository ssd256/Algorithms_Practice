'use strict';
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(); // 배열의 모든 값을 문자열로 변환시킴
    console.log(result); // 구분자(옵션) 안 넣어도 알아서 , 로 구분됨
}

// Q2. make an array out a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const fruit = fruits.split(',', 2); // limit: ~까지 자를 것인지. limit은 옵션이라 생략가능
    console.log(fruit);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    // array.sort(function(a, b){
    //     return b - a;
    // });
    const result = array.reverse();
    console.log(result);
    console.log(array); // 원본 배열의 순서도 바뀜 -> 깊은 복사
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // slice(a, b): a ~ b-1까지 받아옴 
    console.log(result); // [1, 2]
    console.log(array); // [1, 2, 3, 4, 5] -> splice와 달리 원본 배열에 영향X(얕은 복사)
}

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // 콜백함수로 array에서 첫 번째로 찾은 요소를 반환(return이 true일 때)
    const result = students.find((student, index) => student.score === 90);
    // 조건이 true일 때 해당 index를 반환 
    console.log(result);
}

// Q6. make an array of enrolled students : 수업에 등록한 학생 찾기
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // map(): 콜백함수. 인자로 받은 값을 함수를 통해 가공하여 값을 담음
    const result = students.map((student) => student.score);
    // const result = student.map((student) => student.score*2); // score에 2씩 곱한 값이 result에 담김
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // some(value, index, array): 콜백함수. 인자로 받은 값을 함수에서 확인하여 true/false를 반환
    // 콜백함수는 전달받은 인자를 하나하나 검사함 
    // some(): 배열 중 조건을 만족하는 값이 하나라도 있는 지 확인할 때 사용
    const result = students.some((student) => student.score < 50);
    console.log(result);

    // every(): 배열 중 모든 값에 대해 조건을 만족하는 값이 있는지 확인할 때 사용
    const result2 = !students.every((student) => student.score >= 50); // score가 50보다 크거나 같은 게 아닐 때 
    console.log(result2);
}

// Q9. compute students' average score
{
    // reduce(): 콜백함수. 배열의 값을 누적해서 모아놓는 개념
    // 원하는 시작점부터 배열의 모든 요소를 돌면서 어떤 값을 누적하는 것!
    // reduceRight(): 거꾸로 누적
    // return 값이 prev로 연결됨
    // 이전에 호출된 값 + 현재 호출된 값, 0 인덱스부터 시작
    const result = students.reduce((prev, curr) => prev + curr.score, 0); 
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50) // score가 50점 이상인 학생 filtering
    .join(', ');
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // 오름차순 정렬(낮은 순서대로)
    // .sort((a, b) => b - a) : 내림차순 정렬(높은 순서대로)
    .join(', ');  
    console.log(result);
}

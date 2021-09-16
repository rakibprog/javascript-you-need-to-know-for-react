// 1. How to declare a variable using let and const 
const name = "rocky";
let age = 20;
//2. 7 basic condition  >,<, ===,==, !, >=, <=  
// multiple condition : &&, ||  
if (name === 'rocky' || age === 20) {
    console.log('1');
} else if (name === 'rocky') {
    console.log('2');
} else {
    console.log('3');
}

// 3. array 
//array index, array push , pop , shift, unshift
const numbers = [10, 20, 30, 40, 98, 44, 66];
numbers[0] = 50;
// 4.for loop 
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 5. function 

function add(num1, num2) {
    const total = num1 + num2;
    return total;
}
const result = add(10, 20);
console.log(result);

//6.object 
const students = { name: 'rocky', age: 20, roll: 220, subject: ['cse', 'bangla'] }
console.log(students.name); //direct access by property name
console.log(students['age']); //direct acess via string
const myAge = 'age';
console.log(students[myAge]); //access via property name in a variable
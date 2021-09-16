// 1.Template literals 
const students = { name: 'rocky', roll: 20, age: 23, subject: ['bangla', 'english'] }
const myBio = `My name is ${students.name} i am ${students.age} my major is ${students.subject[0]}`
console.log(myBio);
// 2. Arrow function 
const add = () => 10 + 10;
// one parameter
const multipliCation = num => num * 10;
// two parameter 
const divide = (num1, num2) => num1 / num2;
// multiline function 
const sub = (num1, num2) => {
        const multi = num1 * 10;
        const add = num2 + 10;
        const total = multi - add;
        return total;

    }
    //3. ...spread operator 
const numbers = [10, 12, 13, 14, 15];
numbers.push(90);
const newNumbers = [...numbers, 10];
numbers.push(100);
numbers.push(50);
console.log(numbers)
console.log(newNumbers);

// array of object 
const products = [
    { name: 'iphone', price: 500, Ram: '4gb' },
    { name: 'htc', price: 600, Ram: '6gb' },
    { name: 'xiaomi', price: 800, ram: '10gb' },
    { name: 'vivo', price: 500, ram: '6gb' },
    { name: 'samsung', price: 500, ram: '3gb' }
];
//Array map 

const price = products.map(product => product.price);
console.log(price);

// forEach  The forEach() method calls a function once for each element in an array, in order. forEach() is not executed for array elements without values.
products.forEach(products => {
    console.log(products.price);
});

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const ram10Gb = products.filter(products => products.ram == '10gb');
console.log(ram10Gb);
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 
const iPhone = products.find(products => products.name.includes('iphone'));
console.log(iPhone);
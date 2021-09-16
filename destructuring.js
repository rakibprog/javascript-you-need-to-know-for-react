//array destructuring 
const [x, y] = [10, 20];
const data = [50, 20, ];
const [x, y] = data;
// object destructuring 
const products = {
    name: 'rocky',
    age: 20,
    major: { sub: 'cse', credit: '10', varsity: { name: 'royal-universtiy' } }
}
const { sub, credit } = products.major;
console.log(sub, credit);
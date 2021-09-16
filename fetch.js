// json 
const products = [
    { name: 'shirt', price: 100, brand: 'easy' },
    { name: 'pants', price: 200, brand: 'richman' },
    { name: 'shoes', price: 300, brand: 'means' }
];
// stringify
// const product = JSON.stringify(products);
// console.log(product);
// //parse 
// const productParse = JSON.parse(product);
// console.log(productParse);

// // // fetch 
// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data));

// key 
const objectKey = Object.keys(products);
console.log(objectKey);
// values 
const objectValues = Object.values(products);
console.log(objectValues);
//array add 
const newProduct = { name: 'shorts', price: 50, brand: 'infinity' }
const newProducts = [...products, newProduct];
console.log(newProducts);
//array remove 
const removeProduct = products.filter(product => product.name !== 'pants');
console.log(removeProduct);
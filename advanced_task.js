let num = 266219;
let arr = String(num).split('');
let product = 1;

arr.forEach(element => {
    product *= Number(element)
});

console.log(product);

console.log(String(product**3).slice(0, 2));


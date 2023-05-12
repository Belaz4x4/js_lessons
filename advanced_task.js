'use strict';

// First task

let arr = ['165', '265', '5476', '36888', '4586', '212', '325'];

arr.forEach((number) => {
    if (number[0] === '2' || number[0] === '4') console.log(number);
})

// Second task

for (let i = 1; i <= 100; i++) {
    let divider = i-1;
    let isSimpleNumber = true;
    for (divider; divider > 1; divider--) {
        if (i % divider === 0) {
            isSimpleNumber = false;
            break;
        }
    }
    if (isSimpleNumber) console.log(i);
    
}

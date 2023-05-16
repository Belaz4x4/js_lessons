'use strict';

let date        = new Date,
    currentDay   = date.getDay(),
    cnt = 1,
    week = ['Monday', 'Tuesday', 'Wednesday', 'Thurshday', 'Friday', 'Saturday', 'Sunday'];

for (let day of week) {
    if (cnt === currentDay) 
    {
        console.log(day.bold())
    } else if (cnt >= 6) 
    {
        console.log(day.italics())
    }else {
        console.log(day);
    }

    ++cnt
}

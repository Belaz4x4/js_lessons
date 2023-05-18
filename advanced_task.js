'use strict';

let date        = new Date,
    week        = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    monthInYear = ['янраря', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']; 
  
function  outputDate(date){
    let dayOfWeek           = week[date.getDay()],
        day                 =  date.getDate(),
        month               = monthInYear[date.getMonth()],
        year                = date.getFullYear(),
        hour                = date.getHours(),
        HourDeclension      =  getMaleDeclension(hour),
        minute              = date.getMinutes(),
        minuteDeclension    = getFemaleDeclension(minute),
        second              = Math.round(date.getSeconds()),
        secondDeclension    = getFemaleDeclension(second);

    return `Сегодоня ${dayOfWeek}, ${day} ${month} ${year} года, ${hour} час${HourDeclension} ${minute} минут${minuteDeclension} ${second} секунд${secondDeclension}`;
}

function  outputShortDate(date){
    let time = {
        day: String(date.getDate()),
        month: String(date.getMonth() + 1),
        year: String(date.getFullYear()),
        hour: String(date.getHours()),
        minute: String(date.getMinutes()),
        second: String(date.getSeconds()),
    }
        
    for (let key in time) {
        if (time[key].length < 2) time[key] = '0' + time[key];
    }

    return `${time.day}.${time.month}.${time.year} - ${time.hour}:${time.minute}:${time.second}'`;
}

function getMaleDeclension(number) {
    number = +number
    if ((number > 4 && number <= 20) || number === 0) 
    {
        return 'ов'
    }
    number = +String(number).slice(-1)
    if (number === 1)
    {
        return ''
    } else if (number > 1 && number <= 4) 
    {
        return 'а'
    } else 
    {
        return 'ов'
    }
}

function getFemaleDeclension(number) {
    number = +number
    if ((number > 4 && number <= 20) || number === 0) 
    {
        return ''
    }
    number = +String(number).slice(-1)
    if (number === 1)
    {
        return 'а'
    } else if (number > 1 && number <= 4) 
    {
        return 'ы'
    } else 
    {
        return ''
    }
}

let timeLong = document.querySelector('.time__long');
let timeShort = document.querySelector('.time__short');  
timeLong.innerHTML = outputDate(date)
timeShort.innerText = outputShortDate(date)


let lang = document.querySelector("html").getAttribute("lang");

if (lang === 'ru') {
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
}

switch (lang) {
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break
    case 'en':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
}

daysList = {'ru': 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье',
            'en': 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'
}

console.log(daysList[lang]);

let namePerson = 'Максим'
let role = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';
console.log(role);
'use strict'

const $ = document.querySelector.bind(document);
$('#container');
const $$ = document.querySelectorAll.bind(document);
$$('p');

const   books           = $$('.book'),
        booksContainer  = $('.books'),
        body            = $('body');


booksContainer.prepend(books[1]);
booksContainer.append(books[2]);
books[3].before(books[4]);
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

books[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

$('.adv').remove();

const book2Contents = books[0].querySelectorAll('li');

book2Contents[10].before(book2Contents[2]);
book2Contents[3].after(book2Contents[6]);
book2Contents[6].after(book2Contents[8]);

const book5Contents = books[5].querySelectorAll('li');

book5Contents[1].after(book5Contents[9]);
book5Contents[4].after(book5Contents[2]);
book5Contents[7].after(book5Contents[5]);

const book6Contents = books[2].querySelectorAll('li');

book6Contents[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');


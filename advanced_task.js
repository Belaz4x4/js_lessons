'use strict';

function getCutedString(str, len=30) {
    if (typeof str === 'string') {
        str = str.trim()
        if (str.length > len) {
            str = str.slice(0, len) + '...'
        }
        return str
    }
};

console.log(getCutedString('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis similique non veritatis, cumque dignissimos est animi incidunt quia eaque nihil'));


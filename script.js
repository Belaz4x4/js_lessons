'use strict';

function game(minNumber, maxNumber, tryesAmount) {
    let agreement = confirm(`Я загадал число от ${minNumber} до ${maxNumber}. Хотите его угадать?`);


    if (agreement) {
        let hiddenNumber    = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber,
            roundsCount     = tryesAmount;

        alert(`У вас ${tryesAmount} попыток`)

        function gameRound() {
            if (roundsCount === 0) 
            {
                playMore = confirm('Попытки закончились, хотите сыграть еще?');
                if(playMore) 
                {
                    return game(minNumber, maxNumber, tryesAmount) // почему я не могу вернуть родительскую функцию, если ее имя есть в глобальной области видимости?
                } else 
                {
                    alert('Игра окончена. Спасибо за игру.')
                }
                
            } else
            {
                let usersAnswer = getUsersAnswer(`Введите целое число от ${minNumber} до ${maxNumber}.\nЕсли не хотите продолжать, нажмите "отмена".`, minNumber, maxNumber); // как сделать перенос строки в коде без переноса строки в модальном окне?
                                                
                if (usersAnswer === 'exit') 
                {
                    alert('Игра окончена. Спасибо за игру.')
                } else if (usersAnswer === hiddenNumber) 
                {
                    alert('Поздравляю, вы угадали!!!')
                } else if (usersAnswer < hiddenNumber) 
                {
                    roundsCount--
                    alert(`Загаданное число больше. Осталось попыток: ${tryesAmount}`)
                    return gameRound()
                } else
                {
                    roundsCount--
                    alert(`Загаданное число меньше. Осталось попыток: ${tryesAmount}`)
                    return gameRound()
                }
            }
        }
       
        return gameRound
    }
}

function getUsersAnswer(message, minNumber, lastNumer) {
    let answer = prompt(message);

    if (answer === null) {
        return 'exit';
    } else {
        answer = +answer.trim();
        if (isNaN(answer) || answer < minNumber || answer > lastNumer) {
            alert('Введено неверное значение!')
            return getUsersAnswer(message, minNumber, lastNumer)
        } else {
            return answer
        }
    }
}

let firstGame = game(1, 10, 5);

firstGame()

let secondGame = game(1, 100, 10);

secondGame();

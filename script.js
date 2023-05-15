'use strict';

function game(minNumber, maxNumber, tryesAmount) {
    let agreement = confirm(`Я загадал число от ${minNumber} до ${maxNumber}. Хотите его угадать?`),
        hiddenNumber,
        roundsCount;

    function getUsersAnswer(message) {
        let answer = prompt(message);
    
        if (answer === null) {
            return 'exit';
        } else {
            answer = +answer.trim();
            if (isNaN(answer) || answer < minNumber || answer > maxNumber) {
                alert('Введено неверное значение!')
                return getUsersAnswer(message, minNumber, maxNumber)
            } else {
                return answer
            }
        }
    }

    function startGame() {
        hiddenNumber    = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber,
        roundsCount     = tryesAmount;

        alert(`У вас ${roundsCount} попыток`)
    }

    function gameRound() {
        if (roundsCount === 0) 
        {
            playAgain('Попытки закончились. Хотите сыграть еще?')
                        
        } else
        {
            let usersAnswer = getUsersAnswer(`Введите целое число от ${minNumber} до ${maxNumber}.\nЕсли не хотите продолжать, нажмите "отмена".`, minNumber, maxNumber); // как сделать перенос строки в коде без переноса строки в модальном окне?
                                            
            if (usersAnswer === 'exit') 
            {
                alert('Игра окончена. Спасибо за игру.')
            } else if (usersAnswer === hiddenNumber) 
            {
                playAgain('Поздравляю, вы угадали!!! Хотите сыграть еще?')
            } else if (usersAnswer < hiddenNumber) 
            {
                nextRound('больше')
            } else
            {
                nextRound('меньше')
            }
        }
    }

    function playAgain(message) {
        let playMore = confirm(message);
        if(playMore) 
        {
            startGame();
            return gameRound()
        } else 
        {
            alert('Игра окончена. Спасибо за игру.')
        }
    }

    function nextRound(condition) {
        --roundsCount
        alert(`Загаданное число ${condition}. Осталось попыток: ${roundsCount}`)
        return gameRound()
    }

    // старт исполнения

    if (agreement) {
        startGame()
              
        return gameRound
    }
}



// let testGame = game(1, 10, 3);

// testGame()

let secondGame = game(1, 100, 10);

secondGame();

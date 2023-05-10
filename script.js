'use strict';

let money, 
    income = 20000, 
    addExpenses, 
    deposit,
    expenses1,
    amount1,
    expenses2,
    amount2,
    mission = 200000, 
    period = 8;

function inputNumber(message) {
    let number;
    do {
        number = parseFloat(prompt(message).trim());
    } while (isNaN(number))

    return number
}

function start() {
    money = inputNumber('Ваш месячный доход в рублях?');
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    deposit = confirm('Есть ли у вас депозит в банке?');
    expenses1 = prompt('Введите обязательную статью расходов.')
    amount1 = inputNumber('Во сколько это обойдется?');
    expenses2 = prompt('Введите обязательную статью расходов.');
    amount2 = inputNumber('Во сколько это обойдется?');
}

function getStatusIncome(budgetDay) {
    if (budgetDay > 1200) {
        return'У вас высокий уровень дохода';
    } else if (budgetDay <= 1200 && budgetDay >= 600 ) {
        return'У вас средний уровень дохода';
    } else if (budgetDay < 600) {
        return'К сожалению у вас уровень дохода ниже среднего';
    } else {
        return'Что то пошло не так';
}
}

function getExpensesMonth(...expenses) {
    let sum = 0;
    expenses.forEach((item) => {
        sum += item
    })
    return sum
}

function showTypeOf(...items) {
    items.forEach((item) => {
        console.log(typeof item);
    })
}

const getAccumulatedMonth = function (income, expenses) {
    return income - expenses
};

const getTargetMonth = (mission, accumulated) => {
    let monthAmount = Math.ceil(mission / accumulated);

    return monthAmount > 0 ? monthAmount : 'Цель не будет достигнута'
}

start()

showTypeOf(money, income, deposit);

let monthExpenses = getExpensesMonth(amount1, amount2);
console.log(`Расходы за  месяц: ${monthExpenses}`);

// console.log(`Возможные расходы: ${addExpenses.split(', ')}`);
console.log(addExpenses.split(', '));

let accumulatedMonth = getAccumulatedMonth(money, monthExpenses);
let monthToTarget = getTargetMonth(mission, accumulatedMonth);
console.log(`Месяцев до цели: ${monthToTarget}`);

let budgetDay = Math.floor(accumulatedMonth / 30)
console.log(`Дневной бюджет: ${budgetDay}`);

let statusIncome = getStatusIncome(budgetDay)
console.log(statusIncome);
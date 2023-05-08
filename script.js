'use strict';

let money = +prompt('Ваш месячный доход в рублях?'), 
    income = 20000, 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?'),
    mission = 200000, 
    period = 8;


console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.split(' '));

let budgetMonth = (money + income - amount1 - amount2);
console.log(budgetMonth);

let timeToMission = Math.ceil(mission / budgetMonth);
console.log(timeToMission);

let budgetDay = Math.floor(budgetMonth / 30)
console.log(budgetDay);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay <= 1200 && budgetDay >= 600 ) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}
let money = 50000, 
    income = 20000, 
    addExpenses = 'кино, такси, кофе', 
    deposit = false,
    mission = 200000, 
    period = 8;


console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.split(' '));

let budgetDay = ((money + income) / 30).toFixed(2)
console.log(budgetDay);
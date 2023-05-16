'use strict';

function inputNumber(message) {
    let number;
    do {
        number = parseFloat(prompt(message).trim());
    } while (isNaN(number))

    return number
}

let appData = {
    income: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,
    
    asking: () => {
        appData.income      = inputNumber('Ваш месячный доход в рублях?');
        appData.addIncome   = prompt('Перечислите возможные доходы за рассчитываемый период через запятую', 'халтура1, халтура2').toLowerCase().split(', ');
        appData.deposit     = confirm('Есть ли у вас депозит в банке?');
        while (true) {
            let expenseItem = prompt('Введите обязательную статью расходов.', 'байк')
            if (expenseItem === null) 
            {
                break
            } else 
            {
                appData.expenses[expenseItem] = inputNumber('Во сколько это обойдется?');
            }
        };
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пиво, телки, рок-н-ролл').toLowerCase().split(', ')      
        },
       
    getStatusIncome: function () {
        if (appData.budgetDay > 1200) 
        {
            return'У вас высокий уровень дохода';
        } else if (appData.budgetDay <= 1200 && appData.budgetDay >= 600 ) 
        {
            return'У вас средний уровень дохода';
        } else if (appData.budgetDay < 600) 
        {
            return'К сожалению у вас уровень дохода ниже среднего';
        } else 
        {
            return'Что то пошло не так';
        }
    },
    
    getExpensesMonth: function () {
        appData.monthExpenses = 0;
        Object.values(appData.expenses).forEach((item) => {
            appData.monthExpenses += item
        })

        return appData.monthExpenses
    },
    
    getBudget: function () {
        appData.budgetMonth = appData.income - appData.monthExpenses;
        appData.budgetDay = +(appData.budgetMonth / 30).toFixed(2);

        return appData.budgetDay, appData.budgetMonth
    },
    
    getTargetMonth: () => {
        appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
    
        return appData.targetMonth > 0 ? appData.targetMonth : 'Цель не будет достигнута'
    },
};

appData.asking()

appData.getExpensesMonth();
console.log(`Расходы за  месяц: ${appData.monthExpenses}`);

appData.getBudget()
let monthToTarget = appData.getTargetMonth();
console.log(`Месяцев до цели: ${monthToTarget}`);

let statusIncome = appData.getStatusIncome()
console.log(statusIncome);

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    if (typeof appData[key] != 'function') 
    {
        console.log(`${key}: ${appData[key]}`)
    }
}

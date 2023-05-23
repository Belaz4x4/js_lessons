'use strict';

let start                   = document.getElementById('start'),
    addIncomePlus           = document.getElementsByTagName('button')[0],
    addExpensesPlus         = document.getElementsByTagName('button')[1],
    depositCheck            = document.querySelector('#deposit-check'),
    additionalIncomeItems   = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue        = document.querySelector('.budget_month-value'),
    bugetDayValue           = document.getElementsByClassName('budget_day-value'),
    expencesMonthValue      = document.getElementsByClassName('expenses_month-value'),
    addIncomeValue          = document.getElementsByClassName('additional_income-value'),
    incomePeriodValue       = document.getElementsByClassName('income_period-value'),
    targetMonthValue        = document.getElementsByClassName('target_month-value'),
    salaryAmount            = document.querySelector('.salary-amount'),
    targetAmount            = document.querySelector('.target-amount'),
    expenses                = document.querySelectorAll('.expenses-title'),
    expensesAmount          = document.querySelectorAll('.expenses-amount'),
    addExpenses             = document.querySelector('.additional_expenses-item'),
    periodSelect            = document.querySelector('.period-select');
    

function inputNumber(message, defaultValue) {
    let number;
    do {
        number = prompt(message, defaultValue);
        if (number !== null) 
        {
            number = parseFloat(number.trim());
        } else 
        {
            break
        }
    } while (isNaN(number) || number < 0)

    return number
}

function inputText(message, defaultValue) {
    let text;
    do {
        text = prompt(message, defaultValue);
        if (text !== null) 
        {
            text = text.trim();
        } else 
        {
            break
        }
    } while (!isNaN(text) || text === '')

    return text
}

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    perscentDeposit: 0,
    moneyDeposit: 0,
    mission: 100000,
    period: 3,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,
    
    start: function () {
        if (salaryAmount.value === '') {
            alert('Введите месячный доход!');
            return
        };
        appData.budget = salaryAmount.value;
        console.log('appData.budget: ', appData.budget);

        // appData.asking();
        // appData.getExpensesMonth();
        // appData.getBudget();
    },

    asking: () => {
        appData.budget      = inputNumber('Ваш месячный доход в рублях?', 50000);
        if (confirm('У вас есть дополнительный доход?')) 
        {
            let itemIncome = inputText('Какой у вас дополнительный заработок?', 'Такси');
            let cashIncome = inputNumber('Сколько в месяц вы на этом зарабатываете?', 10000);
            appData.income[itemIncome] = cashIncome;
            
        }

        appData.addIncome   = inputText('Перечислите возможные доходы за рассчитываемый период через запятую', 'халтура1, халтура2');
        if (appData.addIncome !== null) appData.addIncome = appData.addIncome.toLowerCase().split(', ');

        appData.deposit     = confirm('Есть ли у вас депозит в банке?');

        while (true) {
            let expenseItem = inputText('Введите обязательную статью расходов.', 'байк')
            if (expenseItem === null) 
            {
                break
            } else 
            {
                appData.expenses[expenseItem] = inputNumber('Во сколько это обойдется?', 10000);
            }
        };
        appData.addExpenses = inputText('Перечислите возможные расходы за рассчитываемый период через запятую', 'пиво, телки, рок-н-ролл');
        if (appData.addExpenses !== null) appData.addExpenses = appData.addExpenses.toLowerCase().split(', ');      
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
        appData.budgetMonth = appData.budget - appData.monthExpenses;
        appData.budgetDay = +(appData.budgetMonth / 30).toFixed(2);

        return appData.budgetDay, appData.budgetMonth
    },
    
    getTargetMonth: () => {
        appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
    
        return appData.targetMonth > 0 ? appData.targetMonth : 'Цель не будет достигнута'
    },

    getInfoDeposit: function () {
        if (appData.deposit) 
        {
            appData.moneyDeposit    = inputNumber('Какая сумма у вас на счету?', 100000);
            appData.perscentDeposit = inputNumber('Под какой процент?', 10);
        }
    },

    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    },

    addExpensesBlock: function () {
        let expensesItems = document.querySelectorAll('.expenses-items');
        let newItem = expensesItems[expensesItems.length - 1].cloneNode(true);
        expensesItems[expensesItems.length - 1].after(newItem);

    },
};

start.addEventListener('click', appData.start);    

addExpensesPlus.addEventListener('click', appData.addExpensesBlock);

// appData.asking()
// appData.getInfoDeposit()

// console.log(`Расходы за  месяц: ${appData.getExpensesMonth()}`);

// appData.getBudget()
// console.log(`Месяцев до цели: ${appData.getTargetMonth()}`);

// console.log(appData.getStatusIncome());

// console.log('Наша программа включает в себя данные:');
// for (let key in appData) {
//     if (typeof appData[key] != 'function') 
//     {
//         if (typeof appData[key] == 'object' && !Array.isArray(appData[key])) 
//         {
//             let objectContent = ''
//             for (let key2 in appData[key]) {
//                 objectContent += `${key2}: ${appData[key][key2]}, `;
//             }
//             console.log(`${key}: ${objectContent.slice(0, -2)}`)
//         } else if (Array.isArray(appData[key]))
//         {
//             let cnt = 0;
//             appData[key].forEach((item) => {
//                 appData[key][cnt] = item[0].toUpperCase() + item.slice(1)
//                 cnt++
//             });

//             console.log(`${key}: ${appData[key].join(', ')}`);
//         } else 
//         {
//             console.log(`${key}: ${appData[key]}`);
//         } 
//     }  
// }




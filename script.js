'use strict';

let start                   = document.getElementById('start'),
    addIncomePlus           = document.getElementsByTagName('button')[0],
    addExpensesPlus         = document.getElementsByTagName('button')[1],
    depositCheck            = document.querySelector('#deposit-check'),
    additionalIncomeItems   = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue        = document.querySelector('.budget_month-value'),
    bugetDayValue           = document.querySelector('.budget_day-value'),
    expencesMonthValue      = document.querySelector('.expenses_month-value'),
    addIncomeValue          = document.querySelector('.additional_income-value'),
    incomePeriodValue       = document.querySelector('.income_period-value'),
    targetMonthValue        = document.querySelector('.target_month-value'),
    salaryAmount            = document.querySelector('.salary-amount'),
    targetAmount            = document.querySelector('.target-amount'),
    expenses                = document.querySelectorAll('.expenses-title'),
    expensesAmount          = document.querySelectorAll('.expenses-amount'),
    expensesItems           = document.querySelectorAll('.expenses-items'),
    addExpensesItem         = document.querySelector('.additional_expenses-item'),
    periodSelect            = document.querySelector('.period-select'),
    addiExpensesValue       = document.querySelector('.additional_expenses-value'),
    incomeItems             = document.querySelectorAll('.income-items'),
    periodAmount            = document.querySelector('.period-amount');

    

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
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,
    incomeMonth: 0,
    
    start: function () {
        appData.budget = +salaryAmount.value;

        appData.getExpenses()
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getTargetMonth();
        appData.getBudget();

        appData.showResult();
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
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.monthExpenses;
        appData.budgetDay = +(appData.budgetMonth / 30).toFixed(2);

        return appData.budgetDay, appData.budgetMonth
    },
    
    getTargetMonth: () => {
        if (targetAmount.value !== '') {
            let monthToTarget = Math.ceil(targetAmount.value / appData.budgetMonth);
            
            if (monthToTarget > 0) 
            {
                return monthToTarget
            }else 
            {       
                return 'Цель не будет достигнута'
            }
        }
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
        let newItem = expensesItems[expensesItems.length - 1].cloneNode(true);
        expensesItems[expensesItems.length - 1].after(newItem);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            addExpensesPlus.style.display = 'none'
        }
    },

    addIncomeBlock: function () {
        let newItem = incomeItems[incomeItems.length - 1].cloneNode(true);
        incomeItems[incomeItems.length - 1].after(newItem);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            addIncomePlus.style.display = 'none'
        }
    },

    getExpenses: function () {
        expensesItems.forEach((item) => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = +item.querySelector('.expenses-amount').value;
            
            if (itemExpenses !== '' && cashExpenses !== '') appData.expenses[itemExpenses] = cashExpenses;
        });
    },

    getIncome: function () {
        incomeItems.forEach((item) => {
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if (itemIncome !== '' && cashIncome !== '') appData.income[itemIncome] = +cashIncome;
            }
        )

        for (let key in appData.income)
        {
            appData.incomeMonth += appData.income[key];
        }
    },

    getAddExpenses: function () {
        let addExpenses = addExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== '') appData.addExpenses.push(item);
        })
    },

    getAddIncome: function () {
        additionalIncomeItems.forEach((item) => {
            let itemValue = item.value.trim();
            if (itemValue !== '') appData.addIncome.push(itemValue)

        });
    },

    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    },

    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth; 
        bugetDayValue.value = appData.budgetDay; 
        expencesMonthValue.value = appData.expensesMonth;
        addiExpensesValue.value = appData.addExpenses.join(', ');
        addIncomeValue.value = appData.addIncome.join(', ');
        if (targetAmount.value !== '') targetMonthValue.value = appData.getTargetMonth();        
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('change', () => {
            incomePeriodValue.value = appData.calcPeriod();
        });
    },


};

start.addEventListener('click', () => {
    if (salaryAmount.value === '') {
        alert('Введите месячный доход!');
    } else {
        appData.start()
    };    
});    

addExpensesPlus.addEventListener('click', appData.addExpensesBlock);
addIncomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', () => {
    periodAmount.textContent = periodSelect.value;
});



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


    // asking: () => {
    //     appData.budget      = inputNumber('Ваш месячный доход в рублях?', 50000);
    //     if (confirm('У вас есть дополнительный доход?')) 
    //     {
    //         let itemIncome = inputText('Какой у вас дополнительный заработок?', 'Такси');
    //         let cashIncome = inputNumber('Сколько в месяц вы на этом зарабатываете?', 10000);
    //         appData.income[itemIncome] = cashIncome;
            
    //     }

    //     appData.addIncome   = inputText('Перечислите возможные доходы за рассчитываемый период через запятую', 'халтура1, халтура2');
    //     if (appData.addIncome !== null) appData.addIncome = appData.addIncome.toLowerCase().split(', ');

    //     appData.deposit     = confirm('Есть ли у вас депозит в банке?');

    //     // while (true) {
    //     //     let expenseItem = inputText('Введите обязательную статью расходов.', 'байк')
    //     //     if (expenseItem === null) 
    //     //     {
    //     //         break
    //     //     } else 
    //     //     {
    //     //         appData.expenses[expenseItem] = inputNumber('Во сколько это обойдется?', 10000);
    //     //     }
    //     // };
    //     // appData.addExpenses = inputText('Перечислите возможные расходы за рассчитываемый период через запятую', 'пиво, телки, рок-н-ролл');
    //     // if (appData.addExpenses !== null) appData.addExpenses = appData.addExpenses.toLowerCase().split(', ');      
    //     },

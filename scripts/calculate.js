document.getElementById('player-total-calculate').addEventListener('click', function () {
    if (flag !== 0) {
        const totalPlayer = document.getElementById('players-list').children.length;
        const perPlayerCost = getFieldValueByID('per-player-expense');
        if (!isNaN(perPlayerCost)) {
            const playerExpenses = findValueToTwoFraction(totalPlayer * perPlayerCost);
            setElementValueById('player-total-expense', playerExpenses);

            document.getElementById('calculate-total').setAttribute('style', 'display: block;');
            setFieldValueById('manager-expense', '');
            setFieldValueById('coach-expense', '');
        }
        else {
            alert('Expense cannot be empty or contain special character. Enter expenses in number format only without any extra symbole.');
            setFieldValueById('per-player-expense', '');
        }
    }
    else {
        alert('Select your squad first');
    }
});

document.getElementById('total-calculate').addEventListener('click', function () {
    const playerExpenses = getElementValueById('player-total-expense');
    const managerExpense = getFieldValueByID('manager-expense');
    const coachExpense = getFieldValueByID('coach-expense');

    if (!isNaN(managerExpense) && !isNaN(coachExpense)) {
        const totalExpense = findValueToTwoFraction(playerExpenses + managerExpense + coachExpense);
        setElementValueById('total-expense', totalExpense);
    }
    else {
        alert('Expense cannot be empty or contain special character. Enter expenses in number format only without any extra symbole.');
        setFieldValueById('manager-expense', '');
        setFieldValueById('coach-expense', '');
    }
});
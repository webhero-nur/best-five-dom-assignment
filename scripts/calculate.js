let totalPlayer = 5;

document.getElementById('player-total-calculate').addEventListener('click', function () {
    const perPlayerCost = getFieldValueByID('per-player-expense');

    const playerExpenses = findValueToTwoFraction(totalPlayer * perPlayerCost);
    setElementValueById('player-total-expense', playerExpenses);
});

document.getElementById('total-calculate').addEventListener('click', function () {
    const playerExpenses = getElementValueById('player-total-expense');
    const managerExpense = getFieldValueByID('manager-expense');
    const coachExpense = getFieldValueByID('coach-expense');

    const totalExpense = findValueToTwoFraction(playerExpenses + managerExpense + coachExpense);

    setElementValueById('total-expense', totalExpense);
});
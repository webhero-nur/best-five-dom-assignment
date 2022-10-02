function getFieldValueByID(fieldId) {
    const inputField = document.getElementById(fieldId);
    const fieldValueString = inputField.value;
    let fieldValue = parseFloat(fieldValueString);
    return fieldValue;
}

function setFieldValueById(fieldId, value) {
    const inputField = document.getElementById(fieldId);
    inputField.value = value;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function findValueToTwoFraction(value) {
    const newValueString = value.toFixed(2);
    const newValue = parseFloat(newValueString);
    return newValue;
}

function clearFunc() {
    setElementValueById('player-total-expense', 0);
    setElementValueById('total-expense', 0);
    document.getElementById('calculate-total').removeAttribute('style');
}
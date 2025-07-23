const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function backspace() {
    display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
}

function calculate() {
    try {
        let result = eval(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = Number(result.toFixed(8));
        }
    } catch (error) {
        display.value = 'Error';
    }
}
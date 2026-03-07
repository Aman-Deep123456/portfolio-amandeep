const display = document.getElementById("display");

function press(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function square() {
    display.value = Math.pow(eval(display.value), 2);
}

function reciprocal() {
    display.value = 1 / eval(display.value);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

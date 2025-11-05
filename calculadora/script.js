let input = document.getElementById('lb');

function numerosTela(num) {
    input.value += num;
}

function operacao(op) {
    input.value += op;
}

function calcular() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}

function limpar() {
    input.value = '';
}

function apagar() {
    input.value = input.value.slice(0, -1);
}

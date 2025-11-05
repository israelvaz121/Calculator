let input = document.getElementById('lb');

function numerosTela(num) {
    input.value += num;
}

function operacao(op) {
    // Impede dois operadores seguidos
    let ultimoCaractere = input.value.slice(-1);
    if (['+', '-', '*', '/'].includes(ultimoCaractere)) {
        return;
    }
    input.value += op;
}

function ponto() {
    let valor = input.value;
    let ultimoNumero = valor.split(/[\+\-\*\/]/).pop();

    // Bloqueia dois pontos no mesmo número
    if (ultimoNumero.includes('.')) {
        return;
    }

    input.value += '.';
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

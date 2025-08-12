// calculadora.js

// Variáveis com os números e o operador
let numero1 = 3;
let numero2 = 8;
let operador = "+"; // Pode ser "+", "-", "*", "/"

// Variável para armazenar o resultado
let resultado;

// Estrutura de decisão para verificar o operador
if (operador === "+") {
    resultado = numero1 + numero2;
} else if (operador === "-") {
    resultado = numero1 - numero2;
} else if (operador === "*") {
    resultado = numero1 * numero2;
} else if (operador === "/") {
    // Verifica se o divisor é diferente de zero
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        resultado = "Erro: divisão por zero!";
    }
} else {
    resultado = "Operador inválido!";
}

// Exibe o resultado
console.log(`Resultado da operação ${numero1} ${operador} ${numero2} = ${resultado}`);

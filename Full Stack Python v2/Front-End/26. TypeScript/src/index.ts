/**
 * Função de multiplicação que recebe dois números e retorna a multiplicação deles
 * @param num1 - Primeiro número
 * @param num2 - Segundo número
 * @returns O resultado da multiplicação dos dois números
 */
function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}

/**
 * Função de saudação que recebe um nome e retorna a concatenação "Olá " + nome
 * @param nome - Nome da pessoa
 * @returns String de saudação concatenada
 */
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Exemplos de uso das funções
console.log("=== Exemplos de uso das funções ===");
console.log();

// Testando a função de multiplicação
console.log("Função de multiplicação:");
console.log(`multiplicacao(5, 3) = ${multiplicacao(5, 3)}`);
console.log(`multiplicacao(10, 2.5) = ${multiplicacao(10, 2.5)}`);
console.log(`multiplicacao(-4, 7) = ${multiplicacao(-4, 7)}`);
console.log();

// Testando a função de saudação
console.log("Função de saudação:");
console.log(saudacao("Alexandre"));
console.log(saudacao("Maria"));
console.log(saudacao("João"));
console.log();

// Exportando as funções para possível uso em outros módulos
export { multiplicacao, saudacao };

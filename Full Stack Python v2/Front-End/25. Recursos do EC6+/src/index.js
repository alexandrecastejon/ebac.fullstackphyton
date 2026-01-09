// Exercício ES6+ - Filtragem de alunos aprovados
// Usando recursos modernos do JavaScript

// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "João Silva", nota: 8.5 },
    { nome: "Maria Santos", nota: 5.2 },
    { nome: "Pedro Oliveira", nota: 7.8 },
    { nome: "Ana Costa", nota: 4.9 },
    { nome: "Carlos Ferreira", nota: 9.1 },
    { nome: "Julia Rodrigues", nota: 6.0 },
    { nome: "Lucas Almeida", nota: 3.7 },
    { nome: "Fernanda Lima", nota: 8.2 },
    { nome: "Rafael Sousa", nota: 6.5 },
    { nome: "Beatriz Nunes", nota: 5.8 }
];

// Função que retorna apenas alunos com nota >= 6 usando arrow function e filter
const obterAlunosAprovados = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
};

// Função alternativa usando destructuring
const obterAlunosAprovadosComDestructuring = (listaAlunos) => {
    return listaAlunos.filter(({ nota }) => nota >= 6);
};

// Executando as funções e exibindo os resultados
console.log("=== TODOS OS ALUNOS ===");
alunos.forEach(({ nome, nota }) => {
    console.log(`${nome}: ${nota}`);
});

console.log("\n=== ALUNOS APROVADOS (nota >= 6) ===");
const alunosAprovados = obterAlunosAprovados(alunos);
alunosAprovados.forEach(({ nome, nota }) => {
    console.log(`${nome}: ${nota}`);
});

console.log("\n=== ESTATÍSTICAS ===");
console.log(`Total de alunos: ${alunos.length}`);
console.log(`Alunos aprovados: ${alunosAprovados.length}`);
console.log(`Taxa de aprovação: ${((alunosAprovados.length / alunos.length) * 100).toFixed(1)}%`);

// Exemplo usando template literals e métodos de array modernos
const mediaGeral = alunos.reduce((soma, { nota }) => soma + nota, 0) / alunos.length;
const mediaAprovados = alunosAprovados.reduce((soma, { nota }) => soma + nota, 0) / alunosAprovados.length;

console.log(`\nMédia geral da turma: ${mediaGeral.toFixed(2)}`);
console.log(`Média dos aprovados: ${mediaAprovados.toFixed(2)}`);

// Exportando para uso em outros módulos (ES6 modules)
export { alunos, obterAlunosAprovados, obterAlunosAprovadosComDestructuring };

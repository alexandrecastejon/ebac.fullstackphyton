"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obterAlunosAprovadosComDestructuring = exports.obterAlunosAprovados = exports.alunos = void 0;
// Exercício ES6+ - Filtragem de alunos aprovados
// Usando recursos modernos do JavaScript

// Array de objetos com nome e nota dos alunos
var alunos = exports.alunos = [{
  nome: "João Silva",
  nota: 8.5
}, {
  nome: "Maria Santos",
  nota: 5.2
}, {
  nome: "Pedro Oliveira",
  nota: 7.8
}, {
  nome: "Ana Costa",
  nota: 4.9
}, {
  nome: "Carlos Ferreira",
  nota: 9.1
}, {
  nome: "Julia Rodrigues",
  nota: 6.0
}, {
  nome: "Lucas Almeida",
  nota: 3.7
}, {
  nome: "Fernanda Lima",
  nota: 8.2
}, {
  nome: "Rafael Sousa",
  nota: 6.5
}, {
  nome: "Beatriz Nunes",
  nota: 5.8
}];

// Função que retorna apenas alunos com nota >= 6 usando arrow function e filter
var obterAlunosAprovados = exports.obterAlunosAprovados = function obterAlunosAprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Função alternativa usando destructuring
var obterAlunosAprovadosComDestructuring = exports.obterAlunosAprovadosComDestructuring = function obterAlunosAprovadosComDestructuring(listaAlunos) {
  return listaAlunos.filter(function (_ref) {
    var nota = _ref.nota;
    return nota >= 6;
  });
};

// Executando as funções e exibindo os resultados
console.log("=== TODOS OS ALUNOS ===");
alunos.forEach(function (_ref2) {
  var nome = _ref2.nome,
    nota = _ref2.nota;
  console.log("".concat(nome, ": ").concat(nota));
});
console.log("\n=== ALUNOS APROVADOS (nota >= 6) ===");
var alunosAprovados = obterAlunosAprovados(alunos);
alunosAprovados.forEach(function (_ref3) {
  var nome = _ref3.nome,
    nota = _ref3.nota;
  console.log("".concat(nome, ": ").concat(nota));
});
console.log("\n=== ESTATÍSTICAS ===");
console.log("Total de alunos: ".concat(alunos.length));
console.log("Alunos aprovados: ".concat(alunosAprovados.length));
console.log("Taxa de aprova\xE7\xE3o: ".concat((alunosAprovados.length / alunos.length * 100).toFixed(1), "%"));

// Exemplo usando template literals e métodos de array modernos
var mediaGeral = alunos.reduce(function (soma, _ref4) {
  var nota = _ref4.nota;
  return soma + nota;
}, 0) / alunos.length;
var mediaAprovados = alunosAprovados.reduce(function (soma, _ref5) {
  var nota = _ref5.nota;
  return soma + nota;
}, 0) / alunosAprovados.length;
console.log("\nM\xE9dia geral da turma: ".concat(mediaGeral.toFixed(2)));
console.log("M\xE9dia dos aprovados: ".concat(mediaAprovados.toFixed(2)));

// Exportando para uso em outros módulos (ES6 modules)
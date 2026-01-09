# Exercício TypeScript - EBAC

Este projeto contém duas funções TypeScript conforme solicitado no exercício:

## Funções Implementadas

### 1. Função de Multiplicação
- **Nome**: `multiplicacao`
- **Parâmetros**: 
  - `num1: number` - Primeiro número
  - `num2: number` - Segundo número
- **Retorno**: `number` - Resultado da multiplicação
- **Descrição**: Recebe dois números como argumentos e retorna a multiplicação deles

### 2. Função de Saudação
- **Nome**: `saudacao`
- **Parâmetros**:
  - `nome: string` - Nome da pessoa
- **Retorno**: `string` - Saudação concatenada
- **Descrição**: Recebe um nome e retorna a concatenação "Olá " + nome

## Como executar

1. Instalar as dependências:
```bash
npm install
```

2. Compilar o TypeScript:
```bash
npm run build
```

3. Executar o código compilado:
```bash
npm start
```

4. Ou executar diretamente com ts-node:
```bash
npm run dev
```

## Estrutura do Projeto

```
├── src/
│   └── index.ts        # Arquivo principal com as funções
├── dist/               # Arquivos compilados (gerado após build)
├── package.json        # Configurações do projeto
├── tsconfig.json       # Configurações do TypeScript
└── README.md          # Este arquivo
```

## Tecnologias Utilizadas

- TypeScript 5.0+
- Node.js
- ts-node (para desenvolvimento)

## Autor

Alexandre Castejon - EBAC Full Stack Python v2

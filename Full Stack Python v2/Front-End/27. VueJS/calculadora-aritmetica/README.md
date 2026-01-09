# Calculadora Aritmética - Vue.js

Uma calculadora aritmética simples e elegante desenvolvida com Vue.js 3 usando Composition API.

## 📋 Funcionalidades

- ✅ **Dois campos de entrada** para inserir os números
- ✅ **Campo select** para escolher a operação aritmética:
  - Adição (+)
  - Subtração (-)
  - Multiplicação (×)
  - Divisão (÷)
- ✅ **Cálculo automático em tempo real** - sem necessidade de clicar em botões
- ✅ **Tratamento de erro** para divisão por zero
- ✅ **Interface responsiva** com design moderno
- ✅ **Animações suaves** no fundo

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação e execução
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre na pasta do projeto
cd calculadora-aritmetica

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173/`

## 🛠️ Tecnologias utilizadas

- **Vue.js 3** - Framework JavaScript reativo
- **Composition API** - Para lógica de componente mais organizada
- **Vite** - Build tool rápido para desenvolvimento
- **CSS3** - Estilização com gradientes e animações
- **HTML5** - Estrutura semântica

## 📱 Recursos técnicos

- **Reatividade**: Utiliza `ref` e `computed` do Vue 3 para reatividade
- **Validação**: Tratamento de valores não numéricos e divisão por zero
- **Responsividade**: Design adaptável para diferentes tamanhos de tela
- **Acessibilidade**: Labels adequados e navegação por teclado

## 🎨 Design

- Interface moderna com gradientes animados
- Cartão com glassmorphism effect
- Cores contrastantes para boa legibilidade
- Animações suaves nas interações

## 🧮 Como usar

1. Digite o primeiro número no primeiro campo
2. Selecione a operação desejada no dropdown
3. Digite o segundo número no segundo campo
4. **O resultado aparece automaticamente** conforme você digita!

## 📝 Estrutura do projeto

```
calculadora-aritmetica/
├── public/
│   └── favicon.ico
├── src/
│   ├── App.vue          # Componente principal com a calculadora
│   └── main.js          # Arquivo de entrada da aplicação
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
└── vite.config.js       # Configuração do Vite
```

## 🤝 Contribuição

Este projeto foi desenvolvido como exercício prático para demonstrar conhecimentos em Vue.js. Sugestões e melhorias são bem-vindas!

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

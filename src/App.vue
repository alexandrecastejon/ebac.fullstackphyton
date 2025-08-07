<script setup>
import { ref, computed } from 'vue'

// Valores reativos para os números e operação
const numero1 = ref(0)
const numero2 = ref(0)
const operacao = ref('soma')

// Cálculo reativo baseado na operação selecionada
const resultado = computed(() => {
  const num1 = parseFloat(numero1.value) || 0
  const num2 = parseFloat(numero2.value) || 0
  
  switch (operacao.value) {
    case 'soma':
      return num1 + num2
    case 'subtracao':
      return num1 - num2
    case 'multiplicacao':
      return num1 * num2
    case 'divisao':
      return num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero'
    default:
      return 0
  }
})
</script>

<template>
  <div class="container">
    <h1>Calculadora Aritmética</h1>
    
    <div class="calculadora">
      <div class="form-group">
        <label for="numero1">Primeiro Número:</label>
        <input 
          id="numero1"
          v-model="numero1" 
          type="number" 
          step="any"
          placeholder="Digite o primeiro número"
        />
      </div>
      
      <div class="form-group">
        <label for="operacao">Operação:</label>
        <select id="operacao" v-model="operacao">
          <option value="soma">Adição (+)</option>
          <option value="subtracao">Subtração (-)</option>
          <option value="multiplicacao">Multiplicação (×)</option>
          <option value="divisao">Divisão (÷)</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="numero2">Segundo Número:</label>
        <input 
          id="numero2"
          v-model="numero2" 
          type="number" 
          step="any"
          placeholder="Digite o segundo número"
        />
      </div>
      
      <div class="resultado">
        <h2>Resultado: <span class="valor-resultado">{{ resultado }}</span></h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.5rem;
}

.calculadora {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

input, select {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;
}

input:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}

input[type="number"] {
  text-align: center;
}

select {
  cursor: pointer;
  background-color: white;
}

.resultado {
  margin-top: 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.resultado h2 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
}

.valor-resultado {
  color: #ffd700;
  font-weight: bold;
  font-size: 1.8rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Responsividade */
@media (max-width: 600px) {
  .container {
    padding: 10px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .calculadora {
    padding: 20px;
  }
}
</style>

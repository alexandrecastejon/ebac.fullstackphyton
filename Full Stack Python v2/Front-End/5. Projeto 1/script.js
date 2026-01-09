document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    alert('Mensagem enviada com sucesso!'); // Exibe uma mensagem de sucesso

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

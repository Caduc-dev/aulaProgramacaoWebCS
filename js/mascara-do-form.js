// Espera o HTML carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Encontra os campos pelos IDs que colocamos no HTML
    const inputCPF = document.querySelector('#cpf');
    const inputTelefone = document.querySelector('#telefone');
    const inputCEP = document.querySelector('#cep');

    // --- Máscara de CPF ---
    if (inputCPF) {
        inputCPF.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
            
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o 1º ponto
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o 2º ponto
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço
            
            e.target.value = value;
        });
    }

    // --- Máscara de Telefone ---
    if (inputTelefone) {
        inputTelefone.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            value = value.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona parênteses e espaço
            if (value.length > 13) {
                // Celular com 9º dígito
                value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
            } else {
                // Telefone fixo ou celular antigo
                value = value.replace(/(\d{4})(\d{4})$/, '$1-$2');
            }
            
            e.target.value = value;
        });
    }

    // --- Máscara de CEP ---
    if (inputCEP) {
        inputCEP.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            value = value.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o traço
            
            e.target.value = value;
        });
    }

});
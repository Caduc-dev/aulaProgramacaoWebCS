// Espera o documento HTML carregar antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Encontra o botão e o menu no HTML
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');

    // 2. Verifica se ambos existem na página
    if (menuToggle && menuPrincipal) {
        
        // 3. Adiciona o "ouvinte de clique" no botão
        menuToggle.addEventListener('click', function() {
            
            // 4. Adiciona ou remove a classe 'aberto' do menu
            menuPrincipal.classList.toggle('aberto');
            
        });
    }

});
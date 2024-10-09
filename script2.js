 
    // Função para salvar a posição de rolagem
    function saveScrollPosition() {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    }

    // Função para restaurar a posição de rolagem
    function restoreScrollPosition() {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition !== null) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
        }
    }

    // Salvar a posição de rolagem quando a página for atualizada
    window.addEventListener('beforeunload', saveScrollPosition);
    
    // Restaurar a posição de rolagem quando a página for carregada
    window.addEventListener('load', restoreScrollPosition);
 


    
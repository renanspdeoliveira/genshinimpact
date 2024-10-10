const imageLink = document.querySelector('.image-link');
const popup = document.getElementById('popup');

imageLink.addEventListener('mouseover', () => {
    popup.style.display = 'flex'; // Mostrar o quadrado
});

imageLink.addEventListener('mouseout', () => {
    popup.style.display = 'none'; // Esconder o quadrado
});

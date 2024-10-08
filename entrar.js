// Función para seleccionar el perfil al hacer clic en la imagen
document.querySelectorAll('.perfil-img').forEach(img => {
    img.addEventListener('click', (e) => {
        const selectedImg = e.target.src; // Obtiene la URL de la imagen seleccionada
        document.getElementById('imgPerfil').src = selectedImg; // Cambia la imagen en el área de perfil
        document.getElementById('btnJugar').style.display = 'block'; // Muestra el botón de jugar
    });
});

// Maneja la selección de género
document.querySelectorAll('.btnPerfil').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const perfil = e.target.textContent;
        document.getElementById('btnJugar').style.display = 'block'; // Muestra el botón de jugar
    });
});

// Redirige al jugar
document.getElementById('btnJugar').addEventListener('click', () => {
    window.location.href = 'jugar.html';
});

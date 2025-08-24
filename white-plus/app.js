// filepath: /home/kali/Documentos/iptv/white-plus/index.html
// Efeito de sombra e fundo escuro no menu ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 30) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

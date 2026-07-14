window.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    if (!card) return;

    card.style.opacity = '0';
    card.style.transform = 'translateY(14px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    requestAnimationFrame(() => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 80);
    });
});

console.log("Carte virtuelle Andréa chargée !");

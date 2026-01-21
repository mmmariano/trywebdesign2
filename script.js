// Animação de Revelar ao Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-reveal]').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// CSS inline dinâmico via JS para a animação
document.head.insertAdjacentHTML('beforeend', `
    <style>
        [data-reveal].active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);



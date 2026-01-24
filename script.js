document.addEventListener('DOMContentLoaded', () => {
    // 1. Iniciar Ícones
    lucide.createIcons();

    // 2. GSAP Reveal (Animação ao rolar)
    gsap.registerPlugin(ScrollTrigger);
    
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    });

    // 3. Efeito Magnético (Botões Mag)
    const magnets = document.querySelectorAll('.mag');
    magnets.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.6, ease: "power2.out" });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
        });
    });

    // 4. Parallax no Fundo
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        gsap.to(".gold-orb", { x: x, y: y, duration: 2, ease: "power2.out" });
    });

    // 5. Navbar Scrolled
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.background = "rgba(249, 247, 242, 0.95)";
            nav.style.padding = "15px 0";
            nav.style.boxShadow = "0 10px 40px rgba(0,0,0,0.05)";
        } else {
            nav.style.background = "transparent";
            nav.style.padding = "25px 0";
            nav.style.boxShadow = "none";
        }
    });
});
// Animação de entrada escalonada (Stagger)
gsap.from(".title-premium span", {
    y: 100,
    skewY: 7,
    opacity: 0,
    duration: 1.8,
    stagger: 0.3,
    ease: "power4.out"
});

// Faz o brilho seguir o mouse
window.addEventListener('mousemove', (e) => {
    gsap.to(".mouse-glow", {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        ease: "power2.out"
    });
});

// Animação das linhas laterais
gsap.from(".v-line", {
    height: 0,
    duration: 2,
    stagger: 0.5,
    ease: "power3.inOut"
});
document.getElementById('pro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const btnText = document.getElementById('btn-text');
    const formBox = document.getElementById('form-container');
    const successBox = document.getElementById('success-box');

    // Feedback visual imediato
    btnText.style.opacity = "0.5";
    btnText.querySelector('span').innerText = "PROCESSANDO...";

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(async (response) => {
        if (response.status == 200) {
            // Animação de saída do form e entrada do sucesso
            gsap.to(form, { opacity: 0, y: -20, duration: 0.5, onComplete: () => {
                form.style.display = 'none';
                successBox.style.display = 'block';
                gsap.from(successBox, { opacity: 0, y: 20, duration: 0.5 });
                lucide.createIcons(); // Ativa o ícone de check
            }});
        }
    })
    .catch(error => {
        alert("Erro na rede. Por favor, tente pelo WhatsApp.");
        btnText.style.opacity = "1";
    });

});
lucide.createIcons();

// Conteúdo da esquerda
gsap.from(".hero-content > *", {
    x: -50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out"
});

// O Globo e o Anel
gsap.from(".tech-world", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "expo.out"
});


function createGalaxy() {
    const container = document.getElementById('stars-galaxy');
    if(!container) return;

    const starCount = 120; // Aumentei a quantidade de 80 para 120
    const colors = ['white', 'gold', 'blue', 'purple']; // Lista de cores do CSS

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        
        // Sorteia uma cor da lista
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        star.className = `star ${colorClass}`;
        
        // TAMANHO: Aumentado para variar entre 2px e 6px (antes era 1-3px)
        const sizeValue = Math.random() * 4 + 2; 
        star.style.width = sizeValue + 'px';
        star.style.height = sizeValue + 'px';

        // Posição aleatória
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';

        // Velocidade do brilho: entre 2 e 5 segundos
        const duration = Math.random() * 3 + 2 + 's';
        const delay = Math.random() * 5 + 's';
        star.style.animation = `twinkle ${duration} infinite ease-in-out ${delay}`;

        container.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createGalaxy);

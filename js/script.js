// ==============================
// 📦 DATA PROYECTOS
// ==============================
const proyectos = [
    {
        titulo: "Half-Life 3D Game",
        desc: "Diseño de un cuarto minimalista.",
        imagen: "https://cdnb.artstation.com/p/assets/images/images/098/477/277/large/artissst-blend-render1.jpg?1777185857",
        specs: "RENDER: CYCLES"
    },
    {
        titulo: "Patrulla Low Poly",
        desc: "Vehículo optimizado GameAsset.",
        imagen: "https://cdna.artstation.com/p/assets/images/images/098/713/108/large/renderforge-studio-6.jpg?1777868776",
        specs: "STYLE: LOW POLY"
    },
    {
        titulo: "Portal Game Room",
        desc: "Cuarto realista en 3D inspirado en Portal.",
        imagen: "https://cdna.artstation.com/p/assets/images/images/098/452/908/large/artissst-blend-asdaf.jpg?1777089086",
        specs: "RENDER: CYCLES"
    }
];

// ==============================
// 🧩 CARGAR PORTAFOLIO
// ==============================
function cargarPortafolio() {
    const container = document.getElementById('portfolio');
    if (!container) return;

    container.innerHTML = '';

    proyectos.forEach((proy, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        // Animación entrada
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = `all 0.6s ease ${index * 0.15}s`;

        card.innerHTML = `
            <img src="${proy.imagen}" alt="${proy.titulo}" class="card-img">
            <div class="card-body">
                <h3>${proy.titulo}</h3>
                <p>${proy.desc}</p>
                <div class="card-specs">
                    <div class="spec-item">${proy.specs}</div>
                </div>
            </div>
        `;

        // Click → abrir modal
        card.addEventListener('click', () => abrirModal(proy));

        container.appendChild(card);

        // Trigger animación
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100);
    });
}

// ==============================
// 🖼️ MODAL (VER RENDER GRANDE)
// ==============================
function crearModal() {
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img id="modal-img">
            <h3 id="modal-title"></h3>
            <p id="modal-desc"></p>
        </div>
    `;
    document.body.appendChild(modal);

    // cerrar modal
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'modal' || e.target.classList.contains('close-btn')) {
            modal.style.display = 'none';
        }
    });
}

function abrirModal(proy) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-img').src = proy.imagen;
    document.getElementById('modal-title').textContent = proy.titulo;
    document.getElementById('modal-desc').textContent = proy.desc;

    modal.style.display = 'flex';
}

// ==============================
// 🎯 EFECTO SCROLL (reveal)
// ==============================
function revealOnScroll() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const trigger = window.innerHeight - 50;

        if (top < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

// ==============================
// ⚡ INIT
// ==============================
document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
    crearModal();
});

window.addEventListener('scroll', revealOnScroll);

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
        imagen: "https://cdnb.artstation.com/p/assets/images/images/098/709/995/large/artissst-blend-4.jpg?1777853229",
        specs: "STYLE: LOW POLY"
    },
    {
        titulo: "Portal Game Room",
        desc: "Cuarto realista en 3D inspirado en Portal.",
        imagen: "https://cdna.artstation.com/p/assets/images/images/098/452/908/large/artissst-blend-asdaf.jpg?1777089086",
        specs: "Cycle"
    }
];

function cargarPortafolio() {
    const container = document.getElementById('portfolio');
    if (!container) return;

    container.innerHTML = ''; 

    proyectos.forEach((proy, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${proy.imagen}" alt="${proy.titulo}" loading="lazy">
            </div>
            <div class="card-content">
                <h3>${proy.titulo}</h3>
                <p>${proy.desc}</p>
                <div class="specs">${proy.specs}</div>
            </div>
        `;
        container.appendChild(card);
    });

    // Observador para animar la entrada de las cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(c => observer.observe(c));
}

document.addEventListener('DOMContentLoaded', cargarPortafolio);

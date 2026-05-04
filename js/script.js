const proyectos = [
    {
        titulo: "Half-Life 3D Game",
        desc: "Diseño de un cuarto minimalista.",
        imagen: "https://cdnb.artstation.com/p/assets/images/images/098/477/277/large/artissst-blend-render1.jpg",
        specs: "RENDER: CYCLES"
    },
    {
        titulo: "Patrulla Low Poly",
        desc: "Vehículo optimizado para mobile con técnica de outline manual.",
        imagen: "https://cdnb.artstation.com/p/assets/images/images/010/248/033/large/tanya-v-police-car.jpg",
        specs: "STYLE: LOW POLY / 3.5K TRIS"
    },
    {
        titulo: "Nordic Furniture Pack",
        desc: "Set de muebles elegantes para interiores fotorrealistas.",
        imagen: "https://cdnb.artstation.com/p/assets/images/images/028/836/833/large/arseny-lavrukhin-render-1.jpg",
        specs: "INTERIOR / OPTIX"
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
            <img src="${proy.imagen}" alt="${proy.titulo}" loading="lazy">
            <div class="card-content">
                <h3>${proy.titulo}</h3>
                <p>${proy.desc}</p>
                <div class="specs">${proy.specs}</div>
            </div>
        `;
        container.appendChild(card);
    });

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

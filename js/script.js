const proyectos = [
    {
        titulo: "Half-Life: Headcrab",
        desc: "Escultura orgánica y texturizado PBR avanzado.",
        imagen: "Images/headcrab.jpg", 
        specs: "RENDER: CYCLES / BLENDER 4.5"
    },
    {
        titulo: "Patrulla Low Poly",
        desc: "Estilo estilizado con técnica de Outline manual.",
        imagen: "Images/patrulla.jpg", 
        specs: "STYLE: CARTOON / WORKTIME: 3H"
    },
    {
        titulo: "Portal Chamber",
        desc: "Recreación de cámara de pruebas con iluminación técnica.",
        imagen: "Images/portal.jpg",
        specs: "ENGINE: CYCLES / VOLUMETRIC"
    }
];

const portfolioContainer = document.getElementById('portfolio');

function cargarProyectos() {
    proyectos.forEach((proy, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        // Añadimos un pequeño retraso basado en el índice para que aparezcan uno tras otro
        card.style.transitionDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <img src="${proy.imagen}" alt="${proy.titulo}">
            <div class="card-content">
                <h3>${proy.titulo}</h3>
                <p>${proy.desc}</p>
                <div class="specs">${proy.specs}</div>
            </div>
        `;
        
        portfolioContainer.appendChild(card);
    });

    // Activar animación al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', cargarProyectos);

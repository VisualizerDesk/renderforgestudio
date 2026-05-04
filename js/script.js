/**
 * RENDERFORGE STUDIO - SCRIPT PROFESIONAL (MODO URL)
 * Proyecto: Portafolio de Artista 3D
 */

// 1. LISTA DE PROYECTOS CON LINKS EXTERNOS
// Solo tienes que cambiar los links entre comillas por tus fotos de Discord, Imgur o ArtStation
const proyectos = [
    {
        titulo: "Half-Life: Headcrab",
        desc: "Escultura orgánica y texturizado PBR avanzado.",
        imagen: "https://tu-link-aqui.com/headcrab.jpg", // <--- PEGA AQUÍ TU URL
        specs: "RENDER: CYCLES / BLENDER 4.5"
    },
    {
        titulo: "Patrulla Low Poly",
        desc: "Estilo estilizado con técnica de Outline manual.",
        imagen: "https://tu-link-aqui.com/patrulla.jpg", // <--- PEGA AQUÍ TU URL
        specs: "STYLE: CARTOON / WORKTIME: 3H"
    },
    {
        titulo: "Portal Chamber",
        desc: "Recreación de cámara de pruebas con iluminación técnica.",
        imagen: "https://tu-link-aqui.com/portal.jpg", // <--- PEGA AQUÍ TU URL
        specs: "ENGINE: CYCLES / VOLUMETRIC"
    }
];

// 2. FUNCIÓN DE CARGA AUTOMÁTICA
function cargarPortafolio() {
    const container = document.getElementById('portfolio');
    if (!container) return;

    container.innerHTML = ''; // Limpiamos el texto de espera

    proyectos.forEach((proy, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Animación de entrada escalonada que ya teníamos
        card.style.transitionDelay = `${index * 0.15}s`;
        
        card.innerHTML = `
            <img src="${proy.imagen}" alt="${proy.titulo}" onerror="this.src='https://via.placeholder.com/600x400?text=Error+al+cargar+render'">
            <div class="card-content">
                <h3>${proy.titulo}</h3>
                <p>${proy.desc}</p>
                <div class="specs">${proy.specs}</div>
            </div>
        `;
        container.appendChild(card);
    });

    activarAnimaciones();
}

// 3. ANIMACIONES CHIDAS (INTERSECTION OBSERVER)
function activarAnimaciones() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // La clase que dispara el CSS
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.card').forEach(card => observer.observe(card));
}

// Iniciar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarPortafolio);

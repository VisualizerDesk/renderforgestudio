// LISTA DE PROYECTOS (Usa URLs directas de Imgur, Discord o ArtStation)
const proyectos = [
    {
        titulo: "Half-Life: Headcrab",
        desc: "Escultura orgánica detallada con texturizado PBR y subsurface scattering.",
        imagen: "https://cdna.artstation.com/p/assets/images/images/026/160/328/large/denis-rutkovsky-headcrab-01.jpg",
        specs: "RENDER: CYCLES / SSS / 4K"
    },
    {
        titulo: "Patrulla Low Poly",
        desc: "Vehículo optimizado para mobile con técnica de outline manual y flat shading.",
        imagen: "https://cdnb.artstation.com/p/assets/images/images/010/248/033/large/tanya-v-police-car.jpg",
        specs: "STYLE: LOW POLY / 3.5K TRIS"
    },
    {
        titulo: "Portal Test Chamber",
        desc: "Recreación técnica de entorno industrial con iluminación volumétrica.",
        imagen: "https://cdna.artstation.com/p/assets/images/images/001/017/384/large/mikhail-vaneev-chamber-04-1.jpg",
        specs: "ENGINE: CYCLES / VOLUMETRICS"
    },
    {
        titulo: "Nordic Furniture Pack",
        desc: "Set de muebles elegantes para interiores fotorrealistas.",
        imagen: "https://cdnb.artstation.com/p/assets/images/images/028/836/833/large/arseny-lavrukhin-render-1.jpg",
        specs: "INTERIOR / OPTIX / ARCHVIZ"
    }
];

function cargarPortafolio() {
    const container = document.getElementById('portfolio');
    if (!container) return;

    container.innerHTML = ''; 

    proyectos.forEach((proy, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.transitionDelay = `${index * 0.15}s`;
        
        card.innerHTML = `
            <img src="${proy.imagen}" alt="${proy.titulo}" onerror="this.src='https://via.placeholder.com/600x400?text=Render+Forge+Studio'">
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

function activarAnimaciones() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.card').forEach(card => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', cargarPortafolio);

// CONFIGURACIÓN DE RENDERFORGE STUDIOS
const PROYECTOS = [
    {
        titulo: "Mi Primer Render Pro",
        descripcion: "Modelado hardsurface optimizado para videojuegos.",
        specs: "Cycles / 4K / Optix",
        // Aquí pegas el link de tu imagen (de ArtStation, Imgur, etc.)
        imagen: "https://via.placeholder.com/800x450" 
    },
    {
        titulo: "Proyecto Norte",
        descripcion: "Pack de muebles nórdicos elegantes.",
        specs: "Eevee / Real-time",
        imagen: "https://via.placeholder.com/800x450"
    }
    // Puedes copiar y pegar más bloques aquí abajo
];

function cargarPortafolio() {
    const contenedor = document.getElementById('portfolio');
    contenedor.innerHTML = ''; // Limpiamos el cargando

    PROYECTOS.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        // Animación de entrada escalonada
        setTimeout(() => card.classList.add('visible'), index * 200);

        card.innerHTML = `
            <img src="${p.imagen}" alt="${p.titulo}">
            <div class="card-content">
                <h3>${p.titulo}</h3>
                <p>${p.descripcion}</p>
                <div class="specs">${p.specs}</div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', cargarPortafolio);

/**
 * RenderForge Studio® - Sistema de Gestión Dinámica (V. 1.0)
 * Solo el administrador tiene acceso al panel para subir proyectos.
 */

// 1. CONFIGURACIÓN DEL PANEL (Cámbialo cuando tengas tu ID)
const CONFIG = {
    PROJECT_ID: 'TU_ID_DE_SANITY_AQUÍ', 
    DATASET: 'production',
    USE_MANUAL_DATA: false // Ya está en FALSE para que no use ejemplos
};

// 2. FUNCIÓN PARA RENDERIZAR LAS TARJETAS
function crearTarjetas(listaProyectos) {
    const portfolioContainer = document.getElementById('portfolio');
    if (!portfolioContainer) return;

    portfolioContainer.innerHTML = ''; // Limpiar el contenedor (ahora empieza vacío)

    if (!listaProyectos || listaProyectos.length === 0) {
        portfolioContainer.innerHTML = '<p style="color: #666; text-align: center; grid-column: 1/-1;">Esperando nuevos renders del jefe...</p>';
        return;
    }

    listaProyectos.forEach((proy, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <img src="${proy.imagen}" alt="${proy.titulo}" onerror="this.src='https://via.placeholder.com/400x225?text=Render+Forge+Studio'">
            <div class="card-content">
                <h3>${proy.titulo}</h3>
                <p>${proy.descripcion}</p>
                <div class="specs">${proy.specs}</div>
            </div>
        `;
        
        portfolioContainer.appendChild(card);
    });

    initScrollReveal();
}

// 3. SISTEMA DE REVELADO (SCROLL REVEAL)
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => observer.observe(card));
}

// 4. CARGA DE DATOS DESDE EL PANEL
async function inicializarPortafolio() {
    if (CONFIG.PROJECT_ID === 'TU_ID_DE_SANITY_AQUÍ') {
        console.warn("RenderForge: Debes poner tu PROJECT_ID para ver los proyectos.");
        crearTarjetas([]); 
        return;
    }

    // Consulta para traer los datos: Título, Descripción, URL de imagen y Specs
    const QUERY = encodeURIComponent('*[_type == "proyecto"] | order(_createdAt desc){titulo, descripcion, "imagen": imagen.asset->url, specs}');
    const URL = `https://${CONFIG.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${CONFIG.DATASET}?query=${QUERY}`;

    try {
        const response = await fetch(URL);
        const { result } = await response.json();
        crearTarjetas(result);
    } catch (error) {
        console.error("Error al conectar con el servidor de renders:", error);
        crearTarjetas([]); 
    }
}

// 5. LANZAMIENTO
document.addEventListener('DOMContentLoaded', inicializarPortafolio);

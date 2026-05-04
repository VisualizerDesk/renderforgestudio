/**
 * RenderForge Studio® - Sistema de Gestión Dinámica
 * Este script se encarga de obtener los proyectos y renderizarlos con animaciones.
 */

// 1. CONFIGURACIÓN DEL PANEL (Lo conectaremos cuando tengas tu ID de Sanity)
const CONFIG = {
    PROJECT_ID: 'TU_ID_AQUÍ', // Aquí irá el ID que te de Sanity
    DATASET: 'production',
    USE_MANUAL_DATA: true // Cambia a false cuando conectemos el panel
};

// 2. DATOS TEMPORALES (Se eliminarán cuando el panel esté activo)
const proyectosManuales = [
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

// 3. FUNCIÓN PARA RENDERIZAR LAS TARJETAS
function crearTarjetas(listaProyectos) {
    const portfolioContainer = document.getElementById('portfolio');
    if (!portfolioContainer) return;

    portfolioContainer.innerHTML = ''; // Limpiar contenedor

    listaProyectos.forEach((proy, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <img src="${proy.imagen}" alt="${proy.titulo}" onerror="this.src='https://via.placeholder.com/400x225?text=Render+En+Proceso'">
            <div class="card-content">
                <h3>${proy.titulo}</h3>
                <p>${proy.desc}</p>
                <div class="specs">${proy.specs}</div>
            </div>
        `;
        
        portfolioContainer.appendChild(card);
    });

    initScrollReveal();
}

// 4. SISTEMA DE REVELADO (SCROLL REVEAL)
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

// 5. CARGA DE DATOS (MÉTODO HÍBRIDO)
async function inicializarPortafolio() {
    if (CONFIG.USE_MANUAL_DATA) {
        console.log("RenderForge Studio: Cargando datos manuales...");
        crearTarjetas(proyectosManuales);
    } else {
        // Aquí es donde sucede la magia del panel automático
        const QUERY = encodeURIComponent('*[_type == "proyecto"]{titulo, descripcion, "imagen": imagen.asset->url, specs}');
        const URL = `https://${CONFIG.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${CONFIG.DATASET}?query=${QUERY}`;

        try {
            const response = await fetch(URL);
            const { result } = await response.json();
            crearTarjetas(result);
        } catch (error) {
            console.error("Error al conectar con el panel:", error);
            crearTarjetas(proyectosManuales); // Fallback por si falla el servidor
        }
    }
}

// 6. LANZAMIENTO
document.addEventListener('DOMContentLoaded', inicializarPortafolio);

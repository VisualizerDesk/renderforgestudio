// ==============================
// 📦 DATA PROYECTOS
// ==============================
const proyectos = [
{
titulo:"Half-Life 3D Game",
desc:"Diseño de un cuarto minimalista.",
imagen:"https://cdnb.artstation.com/p/assets/images/images/098/477/277/large/artissst-blend-render1.jpg"
},
{
titulo:"Patrulla Low Poly",
desc:"Vehículo optimizado GameAsset.",
imagen:"https://cdna.artstation.com/p/assets/images/images/098/713/108/large/renderforge-studio-6.jpg"
},
{
titulo:"Portal Room",
desc:"Cuarto realista inspirado en Portal.",
imagen:"https://cdna.artstation.com/p/assets/images/images/098/452/908/large/artissst-blend-asdaf.jpg"
}
];

// ==============================
// 🧩 CARGAR PORTAFOLIO
// ==============================
function cargarPortafolio(){
const container=document.getElementById("portfolio");
if(!container)return;

container.innerHTML="";

proyectos.forEach((p,index)=>{
let card=document.createElement("div");
card.className="card";

// animación inicial
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=`all 0.6s ease ${index*0.15}s`;

card.innerHTML=`
<img src="${p.imagen}" class="card-img">
<div class="card-body">
<h3>${p.titulo}</h3>
<p>${p.desc}</p>
</div>
`;

// click → modal
card.onclick=()=>openModal(p);

container.appendChild(card);

// activar animación
setTimeout(()=>{
card.style.opacity="1";
card.style.transform="translateY(0)";
},100);

});
}

// ==============================
// 🖼️ MODAL
// ==============================
function crearModal(){
const modal=document.createElement("div");
modal.id="modal";

modal.innerHTML=`
<div class="modal-content">
<span class="close">&times;</span>
<img id="modal-img">
<h3 id="modal-title"></h3>
<p id="modal-desc"></p>
</div>
`;

document.body.appendChild(modal);

// cerrar con click fuera
modal.addEventListener("click",(e)=>{
if(e.target.id==="modal"||e.target.classList.contains("close")){
modal.style.display="none";
}
});
}

function openModal(p){
const modal=document.getElementById("modal");

document.getElementById("modal-img").src=p.imagen;
document.getElementById("modal-title").textContent=p.titulo;
document.getElementById("modal-desc").textContent=p.desc;

modal.style.display="flex";
}

// cerrar con ESC
document.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
const modal=document.getElementById("modal");
if(modal) modal.style.display="none";
}
});

// ==============================
// 🎯 REVEAL SCROLL
// ==============================
function revealOnScroll(){
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{
const top=card.getBoundingClientRect().top;
const trigger=window.innerHeight-60;

if(top<trigger){
card.style.opacity="1";
card.style.transform="translateY(0)";
}
});
}

window.addEventListener("scroll",revealOnScroll);

// ==============================
// 🔥 MOUSE GLOW
// ==============================
document.addEventListener("mousemove",(e)=>{
document.body.style.setProperty("--x", e.clientX+"px");
document.body.style.setProperty("--y", e.clientY+"px");
});

// ==============================
// ⚡ NAVBAR SCROLL EFFECT
// ==============================
window.addEventListener("scroll",()=>{
const nav=document.querySelector(".navbar");
if(window.scrollY>50){
nav.style.background="rgba(0,0,0,0.9)";
}else{
nav.style.background="rgba(0,0,0,0.6)";
}
});

// ==============================
// 🚀 INIT
// ==============================
document.addEventListener("DOMContentLoaded",()=>{
cargarPortafolio();
crearModal();
});

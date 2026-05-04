const proyectos = [
{
titulo:"Half-Life 3D Game",
desc:"Diseño de cuarto minimalista.",
imagen:"https://cdnb.artstation.com/p/assets/images/images/098/477/277/large/artissst-blend-render1.jpg"
},
{
titulo:"Patrulla Low Poly",
desc:"Vehículo optimizado.",
imagen:"https://cdna.artstation.com/p/assets/images/images/098/713/108/large/renderforge-studio-6.jpg"
},
{
titulo:"Portal Room",
desc:"Inspirado en Portal.",
imagen:"https://cdna.artstation.com/p/assets/images/images/098/452/908/large/artissst-blend-asdaf.jpg"
}
];

const container = document.getElementById("portfolio");

/* CREAR CARDS */
proyectos.forEach((p,index)=>{
let card=document.createElement("div");
card.className="card";

/* animación entrada */
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=`all 0.6s ease ${index*0.15}s`;

card.innerHTML=`
<img src="${p.imagen}">
<div class="card-body">
<h3>${p.titulo}</h3>
<p>${p.desc}</p>
</div>
`;

card.onclick=()=>openModal(p);

container.appendChild(card);

/* activar animación */
setTimeout(()=>{
card.style.opacity="1";
card.style.transform="translateY(0)";
},100);
});

/* MODAL */
let modal=document.createElement("div");
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

function openModal(p){
modal.classList.add("active");

document.getElementById("modal-img").src=p.imagen;
document.getElementById("modal-title").innerText=p.titulo;
document.getElementById("modal-desc").innerText=p.desc;
}

/* cerrar modal */
modal.addEventListener("click",(e)=>{
if(e.target.id==="modal"||e.target.classList.contains("close")){
modal.classList.remove("active");
}
});

/* cerrar con ESC */
document.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
modal.classList.remove("active");
}
});

/* 🔥 MOUSE GLOW */
document.addEventListener("mousemove",(e)=>{
document.body.style.setProperty("--x", e.clientX+"px");
document.body.style.setProperty("--y", e.clientY+"px");
});

/* navbar efecto scroll */
window.addEventListener("scroll",()=>{
const nav=document.querySelector(".navbar");
if(window.scrollY>50){
nav.style.background="rgba(0,0,0,0.9)";
}else{
nav.style.background="rgba(0,0,0,0.6)";
}
});

const proyectos = [
{
titulo:"Half-Life 3D Game",
desc:"Diseño de un cuarto minimalista.",
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

const container=document.getElementById("portfolio");

proyectos.forEach(p=>{
let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${p.imagen}">
<div class="card-body">
<h3>${p.titulo}</h3>
<p>${p.desc}</p>
</div>
`;

card.onclick=()=>openModal(p);

container.appendChild(card);
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
modal.style.display="flex";
document.getElementById("modal-img").src=p.imagen;
document.getElementById("modal-title").innerText=p.titulo;
document.getElementById("modal-desc").innerText=p.desc;
}

modal.onclick=(e)=>{
if(e.target.id==="modal"||e.target.className==="close"){
modal.style.display="none";
}
};

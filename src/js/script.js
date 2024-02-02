const botoesPlataforma = document.querySelectorAll(".btn-plataforma");

botoesPlataforma.forEach((botao) => {
  botao.addEventListener("click", () => {

    const elementoPlataformas = botao.querySelector(".plataformas");

    elementoPlataformas.classList.toggle("ativo");
  });
});

function abrirModal() {
    let modal = document.getElementById('modal');
    let modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = '';

    let video = document.createElement('video');
    video.width = '560';
    video.height = '315';
    video.controls = true; 

    let source = document.createElement('source');
    source.src = './src/videos/trailer-gta-v.mp4'; 
    source.type = 'video/mp4';

    video.appendChild(source);

    let closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        fecharModal();
    };

    modalContent.appendChild(closeButton);
    modalContent.appendChild(video);

    modal.style.display = 'block';
}

function fecharModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';


    let modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';
}

function fecharModalFora(event) {
    let modal = document.getElementById('modal');
    if (event.target === modal) {
        fecharModal();
    }
}



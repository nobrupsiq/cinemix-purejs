// Funções para abrir o modal
function openModal() {
    const addFilmeBtn = document.querySelector('.addFilme');
    const editFilmeBtn = document.querySelector('.editFilme');
    const delFilmeBtn = document.querySelector('.delFilme');

    function activeAddModal(e) {
        const modalContainer = document.querySelector(
            '.modal_filmes_container_add',
        );
        const formFilmes = document.querySelector('.form_filmes_add');
        e.preventDefault();
        modalContainer.classList.add('ativo');
        formFilmes.classList.add('ativo');
    }

    function activeEditModal(e) {
        const modalContainer = document.querySelector(
            '.modal_filmes_container_edit',
        );
        const formFilmes = document.querySelector('.form_filmes_edit');
        e.preventDefault();
        modalContainer.classList.add('ativo');
        formFilmes.classList.add('ativo');
    }

    function activeDelModal(e) {
        const modalContainer = document.querySelector(
            '.modal_filmes_container_delet',
        );

        const formFilmes = document.querySelector('.form_filmes_delet');
        e.preventDefault();
        modalContainer.classList.add('ativo');
        formFilmes.classList.add('ativo');
    }

    addFilmeBtn.addEventListener('click', activeAddModal);
    editFilmeBtn.addEventListener('click', activeEditModal);
    delFilmeBtn.addEventListener('click', activeDelModal);
}
openModal();

// Funçao para fechar o modal
function fecharModal() {
    const fecharModal = document.querySelectorAll('.fechar_modal');

    function closeTargetModal() {
        ifr.src = '';
        let parentTarget = this.parentNode;
        const elemPai = parentTarget.closest(
            '[class*="modal_filmes_container_"]',
        );

        parentTarget.classList.remove('ativo');
        elemPai.classList.remove('ativo');
    }

    fecharModal.forEach((btn) => {
        btn.addEventListener('click', closeTargetModal);
    });
}
fecharModal();

// Função para abrir o modal dos trailers
function trailerModal() {
    const fecharModal = document.querySelector('.fechar_modal');
    const trailerBtn = document.querySelectorAll('.trailer_play');
    const modalTrailer = document.querySelector('.modal_trailer');
    const modalTrailerContainer = document.querySelector(
        '.modal_trailer_container',
    );

    function openTrailerModal() {
        modalTrailerContainer.classList.add('ativo');
        modalTrailer.classList.add('ativo');
    }

    function fecharTrailerModal() {
        modalTrailerContainer.classList.remove('ativo');
        modalTrailer.classList.remove('ativo');
    }

    trailerBtn.forEach((btn) => {
        btn.addEventListener('click', openTrailerModal);
    });

    fecharModal.addEventListener('click', fecharTrailerModal);
}
trailerModal();

// FUNCIONALIDADE EXIBIR OS FILMES DA API

// URL API FILMES https://cinemix-7d469-default-rtdb.firebaseio.com/filmes.json

async function getFilmes() {
    const url = 'https://cinemix-7d469-default-rtdb.firebaseio.com/filmes.json';
    const response = await fetch(url);
    const filmes = await response.json();

    filmes.forEach((filme) => {
        const regex = /(?<=[^'])'(?=[^'])/g;
        const cardsContainer = document.querySelector('.cards_filmes');
        cardsContainer.innerHTML += `
         <div class="card_container">
          <div class="card_banner">
            <div class="card_banner_img">
              <img src="${filme.imagem}" alt="">
              <span class="trailer_play"><img onclick="setMovie('${
                  filme.trailer
              }', '${filme.descricao.replace(
            regex,
            '',
        )}')" src="../img/play-fill.svg" alt=""></span>
            </div>
            <div class="card">
              <h3 class="card_title">${filme.titulo}</h3>
              <p class="card_desc"><span>Descrição</span>${filme.descricao.slice(
                  0,
                  180,
              )}. . .</p>
              <p class="card_gen"><span>Gênero: </span>${filme.genero}</p>
            </div>
          </div>
        </div>
         `;
    });
    trailerModal();
}
function setMovie(link, desc) {
    ifr.src = link;
    descTrailer.innerHTML = desc;
}

getFilmes();

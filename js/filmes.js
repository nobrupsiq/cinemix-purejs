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

const url = 'http://localhost:3000/filmes/';

let filmesList = [];

async function getFilmes() {
    const response = await fetch(url);
    const filmes = await response.json();
    filmesList = filmes;
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
    }, {});
    trailerModal();
}
function setMovie(link, desc) {
    ifr.src = link;
    descTrailer.innerHTML = desc;
}
getFilmes();

function addFilme() {
    const obj = {
        id: document.querySelector('.edit_id').value,
        imagem: document.querySelector('#filme_banner').value,
        titulo: document.querySelector('#filme_titulo').value,
        trailer: document.querySelector('#filme_trailer').value,
        descricao: document.querySelector('#filme_descricao').value,
        genero: document.querySelector('#genero').value,
    };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
        })
        .then((data) => {
            console.log('Resposta da API após adicionar filme: ', data);
        })
        .catch((error) => console.error('Erro ao adicionar filme', error));
}

const editBtn = document.querySelector('.edit_btn');

editBtn.addEventListener('click', editFilme);
function editFilme(e) {
    e.preventDefault();
    let obj = {
        id: document.querySelector('.edit_id').value,
        titulo: document.querySelector('.edit_filme_titulo').value,
        genero: document.querySelector('.edit_genero').value,
        descricao: document.querySelector('.edit_filme_descricao').value,
        imagem: document.querySelector('.edit_filme_banner').value,
        trailer: document.querySelector('.edit_filme_trailer').value,
    };

    fetch(url + obj.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
}

function selectFilmeTargetEdit() {
    const selecionarFilme = document.querySelector('#edit_selecionar_filme');
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const titulos = [];
            json.map((filme) => titulos.push(filme.titulo));

            titulos.forEach((titulo) => {
                const createOption = document.createElement('option');
                createOption.innerHTML = titulo;
                createOption.value = titulo;
                selecionarFilme.appendChild(createOption);
            });
        });
}
selectFilmeTargetEdit();

function fillInput() {
    let x = filmesList.find(
        (e) =>
            e.titulo == document.querySelector('#edit_selecionar_filme').value,
    );
    document.querySelector('.edit_id').value = x.id;
    document.querySelector('.edit_filme_banner').value = x.imagem;
    document.querySelector('.edit_filme_titulo').value = x.titulo;
    document.querySelector('.edit_filme_trailer').value = x.trailer;
    document.querySelector('.edit_filme_descricao').value = x.descricao;
    document.querySelector('.edit_genero').value = x.genero;
}

function selectFilmeTargetDelete() {
    const selecionarFilme = document.querySelector('#del_selecionar_filme');
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const titulos = [];
            json.map((filme) => titulos.push(filme.titulo));

            titulos.forEach((titulo) => {
                const createOption = document.createElement('option');
                createOption.innerHTML = titulo;
                createOption.value = titulo;
                selecionarFilme.appendChild(createOption);
            });
        });
}
selectFilmeTargetDelete();

const deleteBtn = document.querySelector('.delet_btn');
deleteBtn.addEventListener('click', deletFilme);

function deletFilme(e) {
    e.preventDefault();
    const obj = {
        id: filmesList.find(
            (e) =>
                e.titulo ==
                document.querySelector('#del_selecionar_filme').value,
        ).id,
    };
    fetch(url + obj.id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
}

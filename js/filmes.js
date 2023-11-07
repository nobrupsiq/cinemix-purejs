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
        let parentTarget = this.parentNode;
        console.log(parentTarget);
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

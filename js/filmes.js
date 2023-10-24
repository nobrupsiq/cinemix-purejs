const playButton = document.querySelectorAll('.trailer_play');
const trailerContainer = document.querySelector('.modal_trailer_container');
const fecharModal = document.querySelector('.fechar_modal');
const modalTrailer = document.querySelector('.modal_trailer');

playButton.forEach((item) => {
    item.addEventListener('click', () => {
        trailerContainer.style.visibility = 'visible';
        modalTrailer.classList.add('modal_trailer_ativo');
    });
});

fecharModal.addEventListener('click', () => {
    trailerContainer.style.visibility = 'hidden';
    modalTrailer.classList.remove('modal_trailer_ativo');
});

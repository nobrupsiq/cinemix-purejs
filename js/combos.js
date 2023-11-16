function openComboModal() {
    const addBtn = document.querySelector('.addBtn');
    const editBtn = document.querySelector('.editBtn');
    const delBtn = document.querySelector('.delBtn');
    const modalContainerAdd = document.querySelector(
        '.modal_combo_container_add',
    );
    const modalContainerEdit = document.querySelector(
        '.modal_combo_container_edit',
    );
    const modalContainerDel = document.querySelector(
        '.modal_combo_container_delet',
    );
    const modalAdd = document.querySelector('.form_combo_add');
    const modalEdit = document.querySelector('.form_combo_edit');
    const modalDel = document.querySelector('.form_combo_delet');

    function openAddModal(e) {
        e.preventDefault();
        modalContainerAdd.classList.add('ativo');
        modalAdd.classList.add('ativo');
    }

    function openEditModal(e) {
        e.preventDefault();
        modalContainerEdit.classList.add('ativo');
        modalEdit.classList.add('ativo');
    }

    function openDelModal(e) {
        e.preventDefault();
        modalContainerDel.classList.add('ativo');
        modalDel.classList.add('ativo');
    }

    addBtn.addEventListener('click', openAddModal);
    editBtn.addEventListener('click', openEditModal);
    delBtn.addEventListener('click', openDelModal);
}
openComboModal();

function fecharModal() {
    const fecharModal = document.querySelectorAll('.fechar_modal');

    function closeTargetModal() {
        let parentTarget = this.parentNode;
        const elemPai = parentTarget.closest(
            '[class*="modal_combo_container_"]',
        );

        parentTarget.classList.remove('ativo');
        elemPai.classList.remove('ativo');
    }

    fecharModal.forEach((btn) => {
        btn.addEventListener('click', closeTargetModal);
    });
}
fecharModal();

// FUNCIONALIDADE FETCH API

async function getCombos() {
    const url = ' http://localhost:3000/combos';
    const response = await fetch(url);
    const filmes = await response.json();

    filmes.forEach((combo) => {
        const cardComboContainer = document.querySelector('.cards_combos');

        cardComboContainer.innerHTML += `
        <div class="card_combos_container">
          <div class="card_combos_banner">
            <img src="${combo.imagem}" alt="">
            <div class="card_combo_specs">
              <h3 class="card_combo_title">${combo.nome}</h3>
              <p class="card_combo_desc"><span>Acompanha</span>${combo.descricao}</p>
            </div>
          </div>
        </div>
        `;
    });
}
getCombos();

// ADD COMBO
const url = 'http://localhost:3000/combos';
function addCombo(e) {
    e.preventDefault();
    const obj = {
        descricao: document.querySelector('.add_combo_descricao').value,
        id: document.querySelector('.combo_id').value,
        imagem: document.querySelector('.add_combo_banner').value,
        nome: document.querySelector('.add_combo_titulo').value,
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
            console.log('Resposta da API após adicionar combo: ', data);
        })
        .catch((error) => console.error('Erro ao combo filme', error));
}

const addComboBtn = document.querySelector('.add_btn');
addComboBtn.addEventListener('click', addCombo);

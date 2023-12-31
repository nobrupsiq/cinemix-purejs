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
let combosList;

async function getCombos() {
    const url = 'https://cinemix-api.vercel.app/combos/';
    const response = await fetch(url);
    const combos = await response.json();
    combosList = combos;

    combos.forEach((combo) => {
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

const url = 'https://cinemix-api.vercel.app/combos/';
function addCombo(e) {
    e.preventDefault();
    const obj = {
        descricao: document.querySelector('.add_combo_descricao').value,
        id: document.querySelector('#combo_id').value,
        imagem: document.querySelector('.add_combo_banner').value,
        nome: document.querySelector('.add_combo_titulo').value,
    };
    alert('COMBO ADICIONADO COM SUCESSO! ✔');
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    }).then((e) => window.location.reload());
    getCombos();
}
const addComboBtn = document.querySelector('.add_btn');
addComboBtn.addEventListener('click', addCombo);

// EDIT COMBO

const editBtn = document.querySelector('.edit_btn');
editBtn.addEventListener('click', comboEdit);
function comboEdit(e) {
    e.preventDefault();
    const obj = {
        id: document.querySelector('#combo_id').value,
        imagem: document.querySelector('.edit_combo_banner').value,
        nome: document.querySelector('.edit_combo_titulo').value,
        descricao: document.querySelector('.edit_combo_descricao').value,
    };

    alert('COMBO ATUALIZADO COM SUCESSO! ✔');
    fetch(url + obj.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    }).then((e) => window.location.reload());
    getCombos();
}

// CRIA OPTIONS DENTRO DO SELECT COM O NOME DOS COMBOS QUE EXISTEM NA API
function selectComboTargetEdit() {
    const selecionarCombo = document.querySelector('#edit_selecionar_combo');
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const titulos = [];
            json.map((combo) => titulos.push(combo.nome));

            titulos.forEach((nome) => {
                const createOption = document.createElement('option');
                createOption.innerHTML = nome;
                createOption.value = nome;
                selecionarCombo.appendChild(createOption);
            });
        });
}
selectComboTargetEdit();

// PREENCHE AS INFORMAÇÕES DO COMBO SELECIONADO
function fillInput() {
    let x = combosList.find(
        (e) => e.nome == document.querySelector('#edit_selecionar_combo').value,
    );
    document.querySelector('#combo_id').value = x.id;
    document.querySelector('.edit_combo_banner').value = x.imagem;
    document.querySelector('.edit_combo_titulo').value = x.nome;
    document.querySelector('.edit_combo_descricao').value = x.descricao;
}

// DELETE COMBO

function selectComboTargetDelete() {
    const selecionarCombo = document.querySelector('#delete_selecionar_combo');
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const titulos = [];
            json.map((combo) => titulos.push(combo.nome));

            titulos.forEach((nome) => {
                const createOption = document.createElement('option');
                createOption.innerHTML = nome;
                createOption.value = nome;
                selecionarCombo.appendChild(createOption);
            });
        });
}
selectComboTargetDelete();

const deleteButton = document.querySelector('.delet_btn');
deleteButton.addEventListener('click', comboDelete);
function comboDelete(e) {
    e.preventDefault();
    const obj = {
        id: combosList.find(
            (combo) =>
                combo.nome ==
                document.querySelector('#delete_selecionar_combo').value,
        ).id,
    };
    if (confirm('TEM CERTEZA QUE DESEJA REMOVER O COMBO? 😥')) {
        alert('COMBO REMOVIDO COM SUCESSO! ✔');
        fetch(url + obj.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        }).then((e) => window.location.reload());
    }
}

// Scroll para o topo

function scrollTop() {
    if (window.scrollY >= 760) {
        document.querySelector('.moveTop').classList.add('ativo');
    }
    if (window.scrollY < 760) {
        document.querySelector('.moveTop').classList.remove('ativo');
    }
}

window.addEventListener('scroll', scrollTop);

function goTop() {
    window.scrollTo(0, 0);
}

const moveTop = document.querySelector('.moveTop img');
moveTop.addEventListener('click', goTop);

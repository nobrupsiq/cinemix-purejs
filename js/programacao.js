// --------------------------------------------- Funcionalidade MODAL -----------------------------------------

function openComboModal() {
    const addBtn = document.querySelector('.addBtn');
    const editBtn = document.querySelector('.editBtn');
    const delBtn = document.querySelector('.delBtn');
    const modalContainerAdd = document.querySelector(
        '.modal_prog_container_add',
    );
    const modalContainerEdit = document.querySelector(
        '.modal_prog_container_edit',
    );
    const modalContainerDel = document.querySelector(
        '.modal_prog_container_delet',
    );
    const modalAdd = document.querySelector('.form_prog_add');
    const modalEdit = document.querySelector('.form_prog_edit');
    const modalDel = document.querySelector('.form_prog_delet');

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
            '[class*="modal_prog_container_"]',
        );

        parentTarget.classList.remove('ativo');
        elemPai.classList.remove('ativo');
    }

    fecharModal.forEach((btn) => {
        btn.addEventListener('click', closeTargetModal);
    });
}
fecharModal();

async function getProgramacao() {
    const url = 'http://localhost:3000/sessoes';
    const response = await fetch(url);
    const programacao = await response.json();

    programacao.forEach((sessao) => {
        const tableContainer = document.querySelector('.table_container');
        tableContainer.innerHTML += `
        <tr>
          <td>${sessao.titulo_filme}</td>
          <td>${sessao.data}</td>
          <td>${sessao.horario}</td>
          <td>${sessao.auditorio}</td>
          <td>${sessao.imagem_tipo}</td>
        </tr>
        `;
    });
}
getProgramacao();

// --------------------------------------------- Adicionar programacao -------------------------------------

const url = 'http://localhost:3000/sessoes/'; // URL da API (endpoint: sessoes)

//
let sessoesList = []; // Resposta do meu Fetch abaixo será alocado no array;
// Sendo assim não irei precisar refazer o fetch para o preenchimento de input
// na função fillInput() --Funcionalidade de editar--
async function getSessoes() {
    const response = await fetch(url);
    const sessoes = await response.json();
    sessoesList = sessoes;
}
getSessoes();

// Funcionalidade para adicionar
const progBtnAdd = document.querySelector('.prog_add_btn');
progBtnAdd.addEventListener('click', addProgramacao);
function addProgramacao() {
    const obj = {
        id: document.querySelector('.prog_id_add').value,
        titulo_filme: document.querySelector('.filme_programacao_add').value,
        data: document.querySelector('.prog_data_add').value,
        horario: document.querySelector('.prog_hora_add').value,
        auditorio: document.querySelector('.prog_auditorio_add').value,
        imagem_tipo: document
            .querySelector('.prog_imagem_add')
            .value.toUpperCase(),
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
}
// Selecionar filmes para adicionar programação
function selectFilmeAddProg() {
    const selecionarProgramacao = document.querySelector(
        '.filme_programacao_add',
    );
    fetch('http://localhost:3000/filmes')
        .then((response) => response.json())
        .then((json) => {
            const titulos = [];
            json.map((filme) => titulos.push(filme.titulo));

            titulos.forEach((titulo) => {
                const createOption = document.createElement('option');
                createOption.innerHTML = titulo;
                createOption.value = titulo;
                selecionarProgramacao.appendChild(createOption);
            });
        });
}
selectFilmeAddProg();

// ------------------------------------------------ EDITAR PROGRAMAÇÃO ------------------------------------

// Selecionar filmes para editar programação
function selectFilmeEditProg() {
    const selecionarProgramacao = document.querySelector('#edit_prog_select');
    fetch('http://localhost:3000/sessoes')
        .then((response) => response.json())
        .then((json) => {
            const titulos = [];
            json.map((sessao) => titulos.push(sessao.titulo_filme));

            titulos.forEach((sessao) => {
                const createOption = document.createElement('option');
                createOption.innerHTML = sessao;
                createOption.value = sessao;
                selecionarProgramacao.appendChild(createOption);
            });
        });
}
selectFilmeEditProg();

// Preenche as informações do filme selecionado para edição
function fillInput() {
    let x = sessoesList.find(
        (e) =>
            e.titulo_filme == document.querySelector('#edit_prog_select').value,
    );
    document.querySelector('.prog_edit_id').value = x.id;
    document.querySelector('.edit_prog_nome').value = x.titulo_filme;
    document.querySelector('.edit_prog_data').value = x.data;
    document.querySelector('.edit_prog_horario').value = x.horario;
    document.querySelector('.edit_prog_auditorio').value = x.auditorio;
    document.querySelector('.edit_prog_imagem').value = x.imagem_tipo;
}

// Funcionalidade para editar
const editBtn = document.querySelector('.edit_btn');
editBtn.addEventListener('click', editarProgramacao);
function editarProgramacao(e) {
    e.preventDefault();
    const obj = {
        id: document.querySelector('.prog_edit_id').value,
        titulo_filme: document.querySelector('.edit_prog_nome').value,
        data: document.querySelector('.edit_prog_data').value,
        horario: document.querySelector('.edit_prog_horario').value,
        auditorio: document.querySelector('.edit_prog_auditorio').value,
        imagem_tipo: document
            .querySelector('.edit_prog_imagem')
            .value.toUpperCase(),
    };
    fetch(url + obj.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
}

// ------------------------------------------------ DELETAR PROGRAMAÇÃO --------------------------------------
// Selecionar sessão para editar programação
function selectFilmeDeleteProg() {
    const selecionarProgramacao = document.querySelector('#delet_prog_select');
    fetch('http://localhost:3000/sessoes')
        .then((response) => response.json())
        .then((json) => {
            const titulos = [];
            json.map((sessao) => titulos.push(sessao.titulo_filme));

            titulos.forEach((sessao) => {
                const createOption = document.createElement('option');
                createOption.innerHTML = sessao;
                createOption.value = sessao;
                selecionarProgramacao.appendChild(createOption);
            });
        });
}
selectFilmeDeleteProg();

// Funcionalidade para deletar uma programação
const delBtn = document.querySelector('.delet_btn');
delBtn.addEventListener('click', deletarProgramacao);
function deletarProgramacao(e) {
    e.preventDefault();
    const obj = {
        id: sessoesList.find(
            (e) =>
                e.titulo_filme ==
                document.querySelector('#delet_prog_select').value,
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

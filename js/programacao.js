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

// PROGRAMAÇÃO ADD
const url = 'http://localhost:3000/sessoes';

const progBtnAdd = document.querySelector('.prog_add_btn');
progBtnAdd.addEventListener('click', addProgramacao);

// Adicionar programacao
function addProgramacao() {
    const obj = {
        id: document.querySelector('.prog_id_add').value,
        titulo_filme: document.querySelector('.prog_titulo_add').value,
        data: document
            .querySelector('.prog_data_add')
            .value.split('-')
            .reverse()
            .join('/'),
        horario: document.querySelector('.prog_hora_add').value,
        auditorio: document.querySelector('.prog_auditorio_add').value,
        imagem_tipo: document.querySelector('.prog_imagem_add').value,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
}

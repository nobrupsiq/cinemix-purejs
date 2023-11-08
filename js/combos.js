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

const btnOpenModal = document.querySelector('.btn--about-me'),
  modal = document.querySelector('.form'),
  modalFon = document.querySelector('.bgn-fon'),
  gridModal = document.querySelector('.grid-modal'),
  gridItem = document.querySelectorAll('.grid-item');

btnOpenModal.addEventListener('click', () => {
  VisibilityOfModals(modal, modalFon, true);
});

modal.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputName = e.target[0].value,
    inputEmail = e.target[1].value,
    inputArea = e.target[2].value;
  const form = {
    name: '',
    email: '',
    textarea: '',
  };
  form.name = inputName;
  form.email = inputEmail;
  form.textarea = inputArea;
  console.log(form);

  VisibilityOfModals(modal, modalFon, false);
  e.target.reset();
});
modalFon.addEventListener('click', () => {
  VisibilityOfModals(modal, modalFon, false);
});

Array.from(gridItem).forEach((item) => {
  item.addEventListener('click', () => {
    const imgItem = item.children[0].src;
    gridModal.innerHTML = `<button class="btn btn--modal-close">Close</button> <img src="${imgItem}" alt="img">`;
    VisibilityOfModals(gridModal, modalFon, true);

    const gridModalClose = document.querySelector('.btn--modal-close');
    gridModalClose.addEventListener('click', () => {
      VisibilityOfModals(gridModal, modalFon, false);
    });
    modalFon.addEventListener('click', () => {
      VisibilityOfModals(gridModal, modalFon, false);
    });
  });
});

function VisibilityOfModals(modal, fon, bool) {
  if (bool) {
    modal.style.display = 'block';
    modal.style.animation = 'modalAnimationNone 0.2s ease-in-out';
    modal.style.animationFillMode = 'forwards';
    fon.style.display = 'block';
  } else {
    modal.style.display = 'none';
    fon.style.display = 'none';
  }
}
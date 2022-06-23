const btnOpenModal = document.querySelector(".btn--about-me");
const modal = document.querySelector(".form");
const modalFon = document.querySelector(".bgn-fon");
const gridModal = document.querySelector(".grid-modal");
const gridItem = document.querySelectorAll(".grid-item");

btnOpenModal.addEventListener("click", () => {
    VisibilityOfModals(modal, modalFon, true);
});

modal.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputName = e.target[0].value,
    inputEmail = e.target[1].value,
    inputArea = e.target[2].value;
    const obj = {
        name: "",
        email: "",
        textarea: "",
    };
    obj.name = inputName;
    obj.email = inputEmail;
    obj.textarea = inputArea;
    console.log(obj);
    
    VisibilityOfModals(modal, modalFon, false);
    e.target.reset();
});
modalFon.addEventListener("click", () => {
    VisibilityOfModals(modal, modalFon, false);
});

Array.from(gridItem).forEach((item) => {
    item.addEventListener("click", () => {
        const imgItem = item.children[0].src;
            gridModal.innerHTML = `<button class="btn btn--modal-close">Close</button> 
            <img src="${imgItem}" alt="img">`;
        VisibilityOfModals(gridModal, modalFon, true);

        const gridModalClose = document.querySelector(".btn--modal-close");
        gridModalClose.addEventListener("click", () => {
            VisibilityOfModals(gridModal, modalFon, false);
        }); 
        modalFon.addEventListener("click", () => {
            VisibilityOfModals(gridModal, modalFon, false);
        });
    });
});

function VisibilityOfModals(modal, fon, bool) {
    if (bool){
        modal.style.display = "block";
        fon.style.display = "block";
    } else {
        modal.style.display = "none";
        fon.style.display = "none";
    }
}

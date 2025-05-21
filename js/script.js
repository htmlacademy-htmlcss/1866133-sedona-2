const body = document.querySelector("body");
const searchHostelBtn = document.querySelector(".btn-search");
const modalWindow =  document.querySelector(".modal-container");
const closeBtn =  document.querySelector(".modal-close-button");


searchHostelBtn.addEventListener("click", function(){
  body.style.overflow = "hidden";
  body.style.paddingRight = "17px";
  modalWindow.classList.remove("modal-container-close");
})

closeBtn.addEventListener("click", function(){
  body.style.overflow = "";
  body.style.paddingRight = "";
  modalWindow.classList.add("modal-container-close");
})

const handleKeydown = (e) => {
  if(e.keyCode === 27) {
    modalWindow.classList.add("modal-container-close");
  }
}

document.addEventListener('keydown', handleKeydown);

const body = document.querySelector("body");
const searchHostelBtn = document.querySelector(".btn-search");
const modalWindow =  document.querySelector(".modal-container");
const closeBtn =  document.querySelector(".modal-close-button");


searchHostelBtn.addEventListener("click", function(){
  // const scrollY = window.scrollY || document.documentElement.scrollTop;
  // modalWindow.style.setProperty('--scroll-position', `${scrollY}px`);
  // body.classList.add("no-scroll");
  body.style.overflow = "hidden";
  modalWindow.classList.remove("modal-container-close");

})

closeBtn.addEventListener("click", function(){
  modalWindow.classList.add("modal-container-close");
  body.style.overflow = "";
})

const handleKeydown = (e) => {
  if(e.keyCode === 27) {
    modalWindow.classList.add("modal-container-close");
  }
}

document.addEventListener('keydown', handleKeydown);

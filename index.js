const menuBtn = document.querySelector("#menu-show-btn");
const menuModal = document.querySelector(".options"); 
const menuIcon = document.querySelector(".fa-bars")

menuBtn.addEventListener("click", menushow);

function menushow() {

    menuIcon.classList.toggle("fa-times");
    menuModal.classList.toggle('show');
}

 


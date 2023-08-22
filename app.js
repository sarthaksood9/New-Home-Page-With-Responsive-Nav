const burger = document.querySelector('.burger');
const resposiveNav = document.querySelector('.resposive-nav');


burger.addEventListener("click", () => {
    resposiveNav.classList.toggle('show');
    burger.classList.toggle('togle');

})
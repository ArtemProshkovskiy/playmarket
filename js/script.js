// Get the modal, button, and close button elements
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Open the modal when the button is clicked
const mainElement = document.querySelector('body');
btn.onclick = function () {
    modal.classList.add("show");
    mainElement.classList.add('body_hidden');

}

// Close the modal when the close button is clicked
closeBtn.onclick = function () {
    modal.classList.remove("show");
    mainElement.classList.remove('body_hidden');
}

// Close the modal when clicking outside of the modal content
document.querySelector(".modal-background").onclick = function (event) {
    if (event.target === document.querySelector(".modal-background")) {
        modal.classList.remove("show");
    }
}

// Add or remove 'scrolled' class on the header menu based on scroll position
// and block or unblock scrolling of the main element accordingly
document.addEventListener('scroll', function() {
    const headerMenu = document.querySelector('.header__menu');
    if (window.scrollY > 70) {
        headerMenu.classList.add('scrolled');
    } else {
        headerMenu.classList.remove('scrolled');
    }
});

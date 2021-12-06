let navLinksDiv = document.querySelector('.navLinks');
let toggleButton = document.querySelector('.toggleButton');

toggleButton.addEventListener('click',()=>{
    navLinksDiv.classList.toggle('active');
});
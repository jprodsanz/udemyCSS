const backdrop = document.querySelector('.backdrop');
const modalNoButton = document.querySelector('.modal__action--negative')
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal')
const toggleButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

// backdrop.style.display = 'block';
// console.dir(selectPlanButtons);

for(let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons [i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}
backdrop.addEventListener('click', function (){
    mobileNav.style.display = 'none';
    closeModal()
});

modalNoButton.addEventListener('click', closeModal);

function closeModal(){
    backdrop.style.display = 'none';
    modal.style.display ='none';
}
toggleButton.addEventListener('click', function() {
    mobileNav.style.display ='block';
    backdrop.style.display = 'block';
    }
)
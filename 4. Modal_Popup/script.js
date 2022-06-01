// variables 
const modal = document.querySelector('.modal'),
     modalContent = document.querySelector('.modal-content'),
       btn  = document.querySelector('.btn'),
       close= document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal); // 화면 클릭하면 다시 닫히는 이유 

// Open Modal 
function openModal(e) {
    e.preventDefault();
    modal.style.display = 'block';
}
// Close Modal 
function closeModal() {
    modalContent.classList.add('slide-up');
    
    setTimeout(() =>{
        modal.style.display = 'none';
        modalContent.classList.remove('slide-up');
    }, 500)
}

// button is inside of a form, default behavior, when you put something inside of a form, when you put a button inside of the form, when you click it, it's going to refresh the page.✅preventDefault /no refresh 
       

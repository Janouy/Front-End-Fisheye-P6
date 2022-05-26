const body = document.getElementById('body');
const modal = document.getElementById("contact_modal");
const wrapper = document.getElementById("main-wrapper");
const wrapperLinks = document.querySelector("#main-wrapper a");
const sortsLinks = document.querySelector(".header-dropdown-link-content a, .header-dropdown-link");
const sortsOpen = document.querySelector(".header-dropdown-link");
const closedBtn = document.getElementById("modal-close-btn");
const submitBtn = document.getElementById('form_submit');
const logo = document.querySelector('.logo');
let inputForm = document.querySelectorAll(".text-input");

function displayModal() {
    const contactButton = document.querySelector('.contact_button');
    modal.setAttribute('aria-hidden', false);
    modal.classList.remove('hidden');    
    wrapper.setAttribute('aria-hidden', true);
    closeBtn.focus();
    closeBtn.setAttribute('aria-hidden', false);
    wrapper.classList.add('opacity');
    body.classList.add('no-scroll');
    wrapper.setAttribute('aria-hidden', true);
    submitBtn.setAttribute('aria-hidden', false);
    wrapperLinks.setAttribute('tabindex', -1);
    contactButton.setAttribute('tabindex', -1);
    sortsLinks.setAttribute('tabindex', -1);
    sortsOpen.setAttribute('tabindex', -1);
}

function closeModal() {
    const contactButton = document.querySelector('.contact_button');
    body.classList.remove('no-scroll');
    wrapper.classList.remove('opacity');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', true);
    modal.setAttribute('tabindex', -1);
    closedBtn.setAttribute('tabindex', -1);
    submitBtn.setAttribute('tabindex', -1);
    wrapperLinks.removeAttribute('tabindex', -1);
    contactButton.removeAttribute('tabindex', -1);
    sortsLinks.removeAttribute('tabindex', -1);
    sortsOpen.removeAttribute('tabindex', -1);
    submitBtn.setAttribute('aria-hidden', true);
}

submitBtn.addEventListener('click', function(event){
    let inputFormdatas = Array.from(inputForm);
    if(inputFormdatas.every((data) => data.checkValidity())){
        event.preventDefault();
        let formDatas ={};
        for (let input of inputForm) {
            formDatas[input.id] = input.value;
        }
        console.log(formDatas);
        this.form.reset();
        closeModal();   
    }
})

const closeBtn = document.getElementById("modal-close-btn");
closeBtn.addEventListener('focus', function(elt) {
    elt.target.style.border = '2px solid black';
    elt.target.style.borderRadius = '5px';
})

document.addEventListener('keydown', function(e){
    const keyCode = e.code;
    const modal = document.getElementById("contact_modal");
    const modalAttribut = modal.getAttribute('aria-hidden');
    if(keyCode == 'Escape' && modalAttribut == 'false'){
        closeModal();
    }
})


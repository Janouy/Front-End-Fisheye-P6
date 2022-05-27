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
function desabledEvents(e){
    e.stopPropagation();
    e.preventDefault();
}

function displayModal() {
    modal.classList.remove('pointerCancel');
    const contactButton = document.querySelector('.contact_button');
    modal.setAttribute('aria-hidden', false);
    modal.classList.remove('hidden');    
    wrapper.setAttribute('aria-hidden', true);
    closeBtn.focus();
    closeBtn.setAttribute('aria-hidden', false);
    closeBtn.removeAttribute('tabindex', -1);
    wrapper.classList.add('opacity');
    body.classList.add('no-scroll');
    wrapper.setAttribute('aria-hidden', true);
    submitBtn.setAttribute('aria-hidden', false);
    submitBtn.removeAttribute('tabindex', -1);
    wrapperLinks.setAttribute('tabindex', -1);
    wrapper.setAttribute('tabindex', -1);
    contactButton.setAttribute('tabindex', -1);
    sortsLinks.setAttribute('tabindex', -1);
    sortsOpen.setAttribute('tabindex', -1);
    contactButton.setAttribute('disabled', 'disabled');
    sortsLinks.setAttribute('disabled', 'disabled');
    sortsOpen.setAttribute('onclick', "return false");
    wrapper.addEventListener("click",desabledEvents,true);
    wrapper.classList.add('pointerCancel');
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
    submitBtn.removeAttribute('aria-label', 'Votre formulaire contient des erreurs');
    contactButton.removeAttribute('disabled', 'disabled')
    sortsLinks.removeAttribute('disabled', 'disabled');
    sortsOpen.removeAttribute('onclick', "return false");
    wrapper.removeEventListener("click",desabledEvents,true);
    wrapper.classList.remove('pointerCancel');
    modal.classList.add('pointerCancel');
}
inputForm.forEach((input) => {
    input.addEventListener('blur', elt => {
        if(!input.checkValidity()){
            input.setAttribute('aria-invalid', true);
        }else 
        if(input.checkValidity()){
            input.setAttribute('aria-invalid', false);
        }
    })
})

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


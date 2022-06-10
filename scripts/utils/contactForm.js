const body = document.getElementById('body');
const modal = document.getElementById("contact-modal");
const wrapper = document.getElementById("main-wrapper");
const wrapperLinks = document.querySelector("#main-wrapper a");
const sortsLinks = document.querySelector(".header-dropdown-link-content a, .header-dropdown-link");
const sortsOpen = document.querySelector(".header-dropdown-link");
const closeBtn = document.getElementById("modal-close-btn");
const submitBtn = document.getElementById('form-submit');
const logo = document.querySelector('.logo');
let inputForm = document.querySelectorAll(".text-input");
function desabledEvents(e){
    e.stopPropagation();
    e.preventDefault();
}

function displayModal() {
    const contactButton = document.querySelector('.contact-button');
    let image_section = document.querySelectorAll('.image-section');
    let video_section = document.querySelectorAll('.video-section');
    image_section.forEach((img) => img.setAttribute('tabindex', -1));
    video_section.forEach((img) => img.setAttribute('tabindex', -1));
    image_section.forEach((img) => img.setAttribute('aria-hidden', true));
    video_section.forEach((img) => img.setAttribute('aria-hidden', true));
    image_section.forEach((img) => img.removeAttribute('href'));
    body.classList.add('no-scroll');
    modal.classList.remove('pointerCancel');
    modal.classList.remove('hidden'); 
    modal.setAttribute('aria-hidden', false);
    wrapper.setAttribute('aria-hidden', true);
    closeBtn.focus();
    closeBtn.removeAttribute('tabindex', -1);
    wrapper.classList.add('opacity');
    wrapper.setAttribute('aria-hidden', true);
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
    const contactButton = document.querySelector('.contact-button');
    body.classList.remove('no-scroll');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', true);
    modal.setAttribute('tabindex', -1);
    wrapper.classList.remove('opacity');
    wrapper.setAttribute('aria-hidden', false);
    closeBtn.setAttribute('tabindex', -1);
    submitBtn.setAttribute('tabindex', -1);
    wrapperLinks.removeAttribute('tabindex', -1);
    contactButton.removeAttribute('tabindex', -1);
    contactButton.focus();
    sortsLinks.removeAttribute('tabindex', -1);
    sortsOpen.removeAttribute('tabindex', -1);
    submitBtn.removeAttribute('aria-label', 'Votre formulaire contient des erreurs');
    contactButton.removeAttribute('disabled', 'disabled')
    sortsLinks.removeAttribute('disabled', 'disabled');
    sortsOpen.removeAttribute('onclick', "return false");
    wrapper.removeEventListener("click",desabledEvents,true);
    wrapper.classList.remove('pointerCancel');
    modal.classList.add('pointerCancel');
    logoFocus();
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

closeBtn.addEventListener('focus', function(elt) {
    elt.target.style.border = '2px solid black';
    elt.target.style.borderRadius = '5px';
})

document.addEventListener('keydown', function(e){
    const keyCode = e.code;
    const modalAttribut = modal.getAttribute('aria-hidden');
    if(keyCode == 'Escape' && modalAttribut == 'false'){
        closeModal();
    }
})


function displayModal() {
    const body = document.getElementById('body');
    const modal = document.getElementById("contact_modal");
    const wrapper = document.getElementById("main-wrapper");
    const closeBtn = document.getElementById("modal-close-btn");
    const submitBtn = document.getElementById('form_submit');
    modal.setAttribute('aria-hidden', false);
    modal.style.display = "flex";
    modal.classList.remove('hidden');    
    wrapper.setAttribute('aria-hidden', true);
    closeBtn.focus();
    closeBtn.setAttribute('aria-hidden', false);
    wrapper.classList.add('opacity');
    body.classList.add('no-scroll');
    body.setAttribute('aria-hidden', true);
    submitBtn.setAttribute('aria-hidden', false);
    
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const wrapper = document.getElementById("main-wrapper");
    const body = document.getElementById('body');
    const closeBtn = document.getElementById("modal-close-btn");
    const submitBtn = document.getElementById('form_submit');
    body.classList.remove('no-scroll');
    wrapper.classList.remove('opacity');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', true);
    closeBtn.setAttribute('aria-hidden', true);
    submitBtn.setAttribute('aria-hidden', true);
}

const submitBtn = document.getElementById('form_submit');

submitBtn.addEventListener('click', function(event){
    submitBtn.setAttribute('aria-hidden', true);
    const inputForm = document.querySelectorAll(".text-input");
    event.preventDefault();
    closeModal();
    let formDatas ={};
    for (let input of inputForm) {
        formDatas[input.id] = input.value;
    }
    console.log(formDatas);
    this.form.reset();
})

const closeBtn = document.getElementById("modal-close-btn");
closeBtn.addEventListener('focus', function(elt) {
    elt.target.style.border = '2px solid black';
})

document.addEventListener('keydown', function(e){
    const keyCode = e.code;
    const modal = document.getElementById("contact_modal");
    const modalAttribut = modal.getAttribute('aria-hidden');
    if(keyCode == 'Escape' && modalAttribut == 'false'){
        closeModal();
    }
})


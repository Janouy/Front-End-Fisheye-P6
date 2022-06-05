const lightbox = document.getElementById("lightbox_modal");

function displayLightbox(media_id) {
    let image_section = document.querySelectorAll('.image_section');
    let video_section = document.querySelectorAll('.video_section');
    image_section.forEach((img) => img.setAttribute('tabindex', -1));
    video_section.forEach((img) => img.setAttribute('tabindex', -1));
    image_section.forEach((img) => img.setAttribute('aria-hidden', true));
    video_section.forEach((img) => img.setAttribute('aria-hidden', true));
    const contactButton = document.querySelector('.contact_button');
    lightbox.setAttribute('aria-hidden', false);    
    lightbox.classList.remove('hidden');    
    wrapper.setAttribute('aria-hidden', true);
    wrapper.classList.add('opacity');
    body.classList.add('no-scroll');
    lightbox.classList.remove('hidden');
    const opened_media = document.getElementById(media_id);
    opened_media.setAttribute('aria-hidden', false);
    opened_media.style.display='flex';
    let imgs_li = [...document.querySelectorAll(".carousel li")];
    imgs_li.forEach((item, index) => {
        item.classList.add('item-'+index);
    })
    let imgs = [...document.querySelectorAll(".carousel li img")];
    imgs.forEach((item) => {
        if(item.naturalWidth > item.naturalHeight){
            item.classList.add('landscape');
        }else if(item.naturalWidth < item.naturalHeight){
            item.classList.add('portrait');
        }
    })
    wrapper.setAttribute('aria-hidden', true);
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

function closeLightbox() {
    let image_section = document.querySelectorAll('.image_section');
    let video_section = document.querySelectorAll('.video_section');
    image_section.forEach((img) => img.setAttribute('tabindex', 0));
    video_section.forEach((img) => img.setAttribute('tabindex', 0));
    image_section.forEach((img) => img.setAttribute('aria-hidden', false));
    video_section.forEach((img) => img.setAttribute('aria-hidden', false));
    const contactButton = document.querySelector('.contact_button');
    body.classList.remove('no-scroll');
    wrapper.classList.remove('opacity');
    lightbox.classList.add('hidden');
    lightbox.setAttribute('aria-hidden', true);
    const display_none_media = document.querySelectorAll('.carousel-item');
    display_none_media.forEach((elt) => elt.setAttribute('aria-hidden', true));
    display_none_media.forEach((elt) => elt.style.display = 'none');
    let imgs_li = [...document.querySelectorAll(".carousel li")];
    imgs_li.forEach((item, index) => {
        item.classList.remove('item-'+index);
    })
    wrapper.setAttribute('aria-hidden', false);
    wrapperLinks.removeAttribute('tabindex', -1);
    wrapper.removeAttribute('tabindex', -1);
    contactButton.removeAttribute('tabindex', -1);
    sortsLinks.removeAttribute('tabindex', -1);
    sortsOpen.removeAttribute('tabindex', -1);
    contactButton.removeAttribute('disabled', 'disabled');
    sortsLinks.removeAttribute('disabled', 'disabled');
    sortsOpen.removeAttribute('onclick', "return false");
    wrapper.removeEventListener("click",desabledEvents,true);
    wrapper.classList.remove('pointerCancel'); 
    logoFocus();
}


document.addEventListener('keydown', function(e){
    const keyCode = e.code;
    const lightboxAttribut = lightbox.getAttribute('aria-hidden');
    if(keyCode == 'Escape' && lightboxAttribut == 'false'){
        closeLightbox();
    }
})

function buttonEventHandler(event) {
    if (event.keyCode === 13) {
        displayLightbox(this.dataset.id);
        buttonFocus();
    event.preventDefault();
    }
    
  }
// focus btn fermeture ligthbox
const closeLightboxBtn = document.getElementById("lightbox-close-btn");
function buttonFocus(){
    closeLightboxBtn.focus();
}

function logoFocus(){
    logo.setAttribute('tabindex', 0);
    logo.focus();
}

closeLightboxBtn.addEventListener('focus', function(elt) {
    elt.target.style.border = '2px solid black';
    elt.target.style.borderRadius = '5px';
})






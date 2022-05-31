const lightboxWrapper = document.getElementById("main-wrapper");
const lightbox = document.getElementById("lightbox_modal");
const closeLightboxBtn = document.getElementById("lightbox-close-btn");
function desabledEvents(e){
    e.stopPropagation();
    e.preventDefault();
}

function displayLightbox(picture_id) {
    const contactButton = document.querySelector('.contact_button');
    lightbox.setAttribute('aria-hidden', false);
    lightbox.classList.remove('hidden');    
    lightboxWrapper.setAttribute('aria-hidden', true);
    lightboxWrapper.classList.add('opacity');
    body.classList.add('no-scroll');
    lightbox.classList.remove('hidden');
    closeLightboxBtn.focus();
    closeLightboxBtn.setAttribute('aria-hidden', false);
    const opened_media = document.getElementById(picture_id);
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
    const contactButton = document.querySelector('.contact_button');
    closeLightboxBtn.setAttribute('aria-hidden', true);
    body.classList.remove('no-scroll');
    lightboxWrapper.classList.remove('opacity');
    lightbox.classList.add('hidden');
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
}


document.addEventListener('keydown', function(e){
    const keyCode = e.code;
    const lightboxAttribut = lightbox.getAttribute('aria-hidden');
    if(keyCode == 'Escape' && lightboxAttribut == 'false'){
        closeLightbox();
    }
})
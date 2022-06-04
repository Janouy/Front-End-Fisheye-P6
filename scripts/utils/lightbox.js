const lightbox = document.getElementById("lightbox_modal");


function displayLightbox() {
    let image_section = document.querySelectorAll('.image_section');
    let video_section = document.querySelectorAll('.video_section');
    let media_photographer_page = document.querySelectorAll('.media_photographer_page');
    image_section.forEach((img) => img.setAttribute('tabindex', -1));
    video_section.forEach((img) => img.setAttribute('tabindex', -1));
    image_section.forEach((img) => img.setAttribute('aria-hidden', true));
    video_section.forEach((img) => img.setAttribute('aria-hidden', true));
    image_section.forEach((img) => img.removeAttribute('aria-label'));
    image_section.forEach((media) => media.classList.add('hidden'))
    media_photographer_page.forEach((media) => media.setAttribute('aria-hidden', true))
    media_photographer_page.forEach((media) => media.classList.add('hidden'))
    document.querySelectorAll('.photograph_image').forEach((media)=> media.classList.add('hidden'));
    document.querySelector('.medias').setAttribute('aria-hidden', true);
    document.querySelector('.medias').classList.add('hidden');
    const contactButton = document.querySelector('.contact_button');
    lightbox.setAttribute('aria-hidden', false);    
    lightbox.classList.remove('hidden');    
    wrapper.setAttribute('aria-hidden', true);
    wrapper.classList.add('opacity');
    body.classList.add('no-scroll');
    lightbox.classList.remove('hidden');
    const opened_media = document.getElementById(this.id);
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
}


document.addEventListener('keydown', function(e){
    const keyCode = e.code;
    const lightboxAttribut = lightbox.getAttribute('aria-hidden');
    if(keyCode == 'Escape' && lightboxAttribut == 'false'){
        closeLightbox();
    }
})

    // focus btn fermeture ligthbox
    const closeLightboxBtn = document.getElementById("lightbox-close-btn");
    function buttonFocus(){
        closeLightboxBtn.focus();
        document.querySelector('.medias').setAttribute('aria-hidden', true);
        document.querySelector('.medias').classList.add('hidden');
        document.querySelector('.medias').classList.remove('hidden')
    // closeLightboxBtn.setAttribute('tabindex', -1);
        let image_section = document.querySelectorAll('.image_section');
        let video_section = document.querySelectorAll('.video_section');
        image_section.forEach((img) => img.removeAttribute('tabindex', -1));
        video_section.forEach((img) => img.removeAttribute('tabindex', -1));
        image_section.forEach((img) => img.setAttribute('aria-hidden', false));
        video_section.forEach((img) => img.setAttribute('aria-hidden', false));
    }
    closeLightboxBtn.addEventListener('focus', function(elt) {
        elt.target.style.border = '2px solid black';
        elt.target.style.borderRadius = '5px';
    })




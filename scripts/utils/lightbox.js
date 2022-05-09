function displayLightbox(picture_id) {
    const body = document.getElementById('body');
    const lightbox = document.getElementById("lightbox_modal");
    const wrapper = document.getElementById("main-wrapper");
    const closeBtn = document.getElementById("lightbox-close-btn");
    lightbox.setAttribute('aria-hidden', false);
    lightbox.classList.remove('hidden');    
    wrapper.setAttribute('aria-hidden', true);
    wrapper.classList.add('opacity');
    body.classList.add('no-scroll');
    lightbox.classList.remove('hidden');
    closeBtn.focus();
    const opened_media = document.getElementById(picture_id);
    opened_media.setAttribute('aria-hidden', false);
    opened_media.style.display='flex';
    let imgs = [...document.querySelectorAll(".carousel li img")];
    imgs.forEach((item) => {
        if(item.naturalWidth > item.naturalHeight){
            item.classList.add('landscape');
        }else if(item.naturalWidth < item.naturalHeight){
            item.classList.add('portrait');
        }
    })
}

function closeLightbox() {
    const modal = document.getElementById("lightbox_modal");
    const wrapper = document.getElementById("main-wrapper");
    const body = document.getElementById('body');
    body.classList.remove('no-scroll');
    wrapper.classList.remove('opacity');
    modal.classList.add('hidden');
    const display_none_media = document.querySelectorAll('.carousel-item');
    display_none_media.forEach((elt) => elt.setAttribute('aria-hidden', true));
    display_none_media.forEach((elt) => elt.style.display = 'none');

}
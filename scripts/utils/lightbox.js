function displayLightbox() {
    const body = document.getElementById('body');
    const lightbox = document.getElementById("lightbox_modal");
    const wrapper = document.getElementById("lightbox-wrapper");
    const closeBtn = document.getElementById("lightbox-close-btn");
    lightbox.setAttribute('aria-hidden', false);
	lightbox.style.display = "flex";
    light.classList.remove('hidden');    
    wrapper.setAttribute('aria-hidden', true);
    closeBtn.focus();
    wrapper.classList.add('opacity');
    body.classList.add('no-scroll');
    
}
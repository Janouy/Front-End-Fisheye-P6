
async function getMedias() {
    
    fetch('../../data/photographers.json')
        .then((response) => {
            return response.json();
        })
        .then((photographers_medias) => {
            const queryString = window.location.search;
            const photographerId = queryString.replace('?', '');
            let allMedias = photographers_medias.media;
            let medias = allMedias.map(media => mediasFactory(media));
            const mediasSection = document.querySelector(".medias");
            medias.forEach((media) => {
                if(media.photographerId == photographerId){
                    mediasSection.appendChild(media.getUserCardDOM());
                }
            });
            const carouselUl = document.querySelector('.carousel');
            let mediasCarousel = allMedias.map(media => carouselFactory(media));
            let mediasArray = [];
            for (let medias of mediasCarousel){
                if (medias.photographerId == photographerId){
                    mediasArray.push(medias)
                }
            }
            mediasArray.forEach((media, index) => {
                let li = document.createElement( 'li' );
                carouselUl.appendChild(li);
                li.appendChild(media.getUserCardDOM());
                li.classList.add("carousel-item");
                li.classList.add('item-'+index);
                li.setAttribute('id', media.id);
                li.setAttribute("aria-hidden", true);
            });
        })
        .catch(err => console.log('==== error ====', err));
            
}

getMedias();

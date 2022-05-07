
async function getMedias() {
    
    fetch('../../data/photographers.json')
        .then((response) => {
            return response.json();
        })
        .then((datas) => {
            const queryString = window.location.search;
            const photographerId = queryString.replace('?', '');
            let allMedias = datas.media;
            let medias = allMedias.map(media => mediasFactory(media));
            const mediasSection = document.querySelector(".medias");
            medias.forEach((media) => {
                if(media.photographerId == photographerId){
                    mediasSection.appendChild(media.getUserCardDOM());
                }
            });
            const carrouselUl = document.querySelector('.carousel');
            let mediasCarrousel = allMedias.map(media => carrouselFactory(media));
            let mediasArray = [];
            for (let medias of mediasCarrousel){
                if (medias.photographerId == photographerId){
                    mediasArray.push(medias)
                }
            }
            mediasArray.forEach((media, index) => {
                let li = document.createElement( 'li' );
                carrouselUl.appendChild(li);
                li.appendChild(media.getUserCardDOM());
                li.classList.add("carousel-item");
                li.classList.add('item-'+index);
                li.setAttribute("aria-hidden", false);
            });
        })
        .catch(err => console.log('==== error ====', err));
            
}

getMedias();

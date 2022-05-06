
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
            const carrouselUl = document.getElementById('lightbox_modal');
            let mediasCarrousel = allMedias.map(media => carrouselFactory(media));
            let mediasArray = [];
            for (let medias of mediasCarrousel){
                if (medias.photographerId == photographerId){
                    mediasArray.push(medias)
                }
            }
            mediasArray.forEach((media, index) => {
                let div = document.createElement( 'div' );
                carrouselUl.appendChild(div);
                div.appendChild(media.getUserCardDOM());
                div.classList.add(index);
            });
        })
        .catch(err => console.log('==== error ====', err));
            
}

getMedias();

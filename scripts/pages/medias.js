
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
            const mediasSorting = document.querySelector(".medias_sorting");
            const photographerFooter = document.querySelector(".footer");
            const sorting = document.createElement('select');
            sorting.setAttribute('aria-hidden', false);
            sorting.setAttribute('role', 'button');
            sorting.setAttribute('aria-haspopup', 'listbox');
            sorting.setAttribute('tabindex', 0);
            sorting.setAttribute('id', 'listbox1');
            const popularity = document.createElement('div');
            popularity.setAttribute('role', 'option');
            popularity.textContent = 'Popularité';
            const date = document.createElement('div');
            date.setAttribute('role', 'option');
            date.textContent = 'Date';
            const title = document.createElement('div');
            title.setAttribute('role', 'option');
            title.textContent = 'Titre';
            mediasSorting.appendChild(sorting);
            sorting.appendChild(popularity);
            sorting.appendChild(date)
            sorting.appendChild(title);
            const totalLikes = allMedias.map(media => new Likes(media));
            let totalOfLikes = [];
            totalLikes.forEach((media) => {
                if(media.photographerId == photographerId){
                    totalOfLikes.push(media.likes)
                }
            });
            let total = 0;
            for(let i=0; i<totalOfLikes.length; i++){
                total += totalOfLikes[i];
            }
            const allLikes = {photographerId: photographerId, likes: total}
            const test = new Likes(allLikes);
            photographerFooter.appendChild(test.getUsercardDOMFooter()); 

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
            //console.log(mediasArray.likes)
            mediasArray.forEach((media, index) => {
                let li = document.createElement( 'li' );
                carouselUl.appendChild(li);
                li.appendChild(media.getUserCardDOM());
                li.classList.add("carousel-item");
                
                li.setAttribute('id', media.id);
            });
        })
        .catch(err => console.log('==== error ====', err));
            
}

getMedias();

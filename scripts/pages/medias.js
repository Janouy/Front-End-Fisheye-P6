
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
            const photographerFooter = document.querySelector(".footer");
            const totalLikes = allMedias.map(media => new Likes(media));
            let totalOfLikes = [];
            function compare_title( a, b ){
                if ( a.title.toLowerCase() < b.title.toLowerCase()){
                    return -1;
                }
                if ( a.title.toLowerCase() > b.title.toLowerCase()){
                    return 1;
                }
                return 0;
            };
            function compare_date( a, b ){
                if ( parseInt(a.date) > parseInt(b.date)){
                    return -1;
                }
                if ( parseInt(a.date) < parseInt(b.date)){
                    return 1;
                }
                return 0;
            };
            function compare_likes( a, b ){
                if ( parseInt(a.likes) < parseInt(b.likes)){
                    return -1;
                }
                if ( parseInt(a.likes) > parseInt(b.likes)){
                    return 1;
                }
                return 0;
            };
            const medias_sorting = document.querySelector('select');
                medias_sorting.addEventListener('change', function () {
                    if (this.value === 'Titre') {
                        medias.sort(compare_title);
                        mediasSection.innerHTML = '';
                        medias.forEach((media) => {
                            if(media.photographerId == photographerId){
                                mediasSection.appendChild(media.getUserCardDOM());
                            }
                        });
                    }else if(this.value ==='Date'){
                        medias.sort(compare_date);
                        mediasSection.innerHTML = '';
                        medias.forEach((media) => {
                            if(media.photographerId == photographerId){
                                mediasSection.appendChild(media.getUserCardDOM());
                            }
                        });
                    }else if(this.value === 'Popularite'){
                        medias.forEach((media) => {
                            let liked_media = document.getElementById(`liked_${media.id}`);
                            if(media.photographerId == photographerId){
                                mediasSection.appendChild(media.getUserCardDOM());
                                media.likes = liked_media.textContent;
                                medias.sort(compare_likes);
                                mediasSection.innerHTML = '';
                                medias.forEach((sortedMedia) => {
                                    if(sortedMedia.likes != allMedias.likes){
                                        mediasSection.appendChild(sortedMedia.getUserCardDOM());
                                    }
                                });
                            }
                        });
                    }
                })
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
            let carouselMediasArray = [];
            for (let medias of mediasCarousel){
                if (medias.photographerId == photographerId){
                    carouselMediasArray.push(medias)
                }
            }
            mediasCarousel.forEach((media) => {
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

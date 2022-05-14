
async function getMedias() {
    
    fetch('../../data/photographers.json')
        .then((response) => {
            return response.json();
        })
        .then((photographers_medias) => {
            const queryString = window.location.search;
            const photographerId = queryString.replace('?', '');
            let allMedias = photographers_medias.media;
            const mediasSortedById = allMedias.reduce(function(acc, valCourante){
                if(acc.indexOf(valCourante) === -1){
                    if(valCourante.photographerId == photographerId){
                        acc.push(valCourante);
                    }
                }
                return acc
            }, []);

            // appel de la class qui contiendra l'affichage des medias sur la page photographe
            const mediasSection = document.querySelector(".medias");
            //choix du model de class à executer avec le factory pattern mediasFactory si le media est une photo ou une video
            let medias = mediasSortedById.map(media => mediasFactory(media));

            let liked_media;
            let heart_media;
            //affichage des medias sur la page photographer.html et gestion de l'incrementation du like
            medias.forEach((media) => {
                mediasSection.appendChild(media.getUserCardDOM());
                heart_media = document.querySelector(`#liked_${media.id} .like i`);
                liked_media = document.getElementById(`liked_${media.id}`);
                incrLike(heart_media, liked_media, media);
            });
            
          
            
            // appel de la class qui contiendra l'affichage des medias dans la lightbox
            const carouselUl = document.querySelector('.carousel');
             //choix du model de class à executer avec le factory pattern carouselFactory si le media est une photo ou une video
            let mediasCarousel = mediasSortedById.map(media => carouselFactory(media));
            //affichage de la lightbox sur la page photographer.html pour chaque instance de classes appelées dans le carouselfactory
            mediasCarousel.forEach((media) => {
                let li = document.createElement( 'li' );
                carouselUl.appendChild(li);
                li.appendChild(media.getUserCardDOM());
                li.classList.add("carousel-item");
                li.setAttribute('id', media.id);
            });

            // appel de la class qui contiendra l'affichage de l'encart contenant le total des likes et le tarif  sur la page photographe
            const photographerFooter = document.querySelector(".footer");

            // faire la somme des likes et les afficher dans l'encart
            const initialValue = 0;
            let totalOfLikes = [];
            const totalLike = mediasSortedById.map(media => new Likes(media));
            totalLike.forEach((media) => {
                totalOfLikes.push(media.likes)
            });
            const totalLikes = totalOfLikes.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                initialValue
            );
            const allLikes = {likes: totalLikes}
            const test = new Likes(allLikes);
            photographerFooter.appendChild(test.getUsercardDOMFooter()); 
          
            // afficher les données triées
            
            const medias_sorting = document.querySelector('select');
            selectSortingValue(medias_sorting, medias, mediasSection, allMedias);

            
        })
        .catch(err => console.log('==== error ====', err));
            
}

getMedias();

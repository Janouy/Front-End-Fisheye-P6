
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

            // appel de la balise qui contiendra l'affichage des medias dans la lightbox
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

            // appel de la balise qui contiendra l'affichage des medias sur la page photographe
            const mediasSection = document.querySelector(".medias");
            //choix du model de class à executer avec le factory pattern mediasFactory si le media est une photo ou une video
            let medias = mediasSortedById.map(media => mediasFactory(media));
            
            // appel de la balsie qui permet de trier les médias
            const medias_sorting = document.querySelector('select');
            //affichage des medias sur la page photographer.html et gestion de l'incrementation du like et affichage du tri
            medias.forEach((media) => {
                mediasSection.appendChild(media.getUserCardDOM());
                selectSortingValue(medias_sorting, medias, mediasSection);
            });
        
            // appel de la balise qui contiendra l'affichage de l'encart contenant le total des likes et le tarif  sur la page photographe
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
            
        })
        .catch(err => console.log('==== error ====', err));
            
}

getMedias();
window.onunload = function () {
	sessionStorage.clear();
}

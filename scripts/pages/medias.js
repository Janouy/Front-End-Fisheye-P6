
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

            //choix du model de class à executer avec le factory pattern carouselFactory si le media est une photo ou une video
            let mediasCarousel = mediasSortedById.map(media => carouselFactory(media, sortingMedias)).sort(compare_likes);
            let carouselMedia = document.getElementById("lightbox_modal");
            //choix du model de class à executer avec le factory pattern mediasFactory si le media est une photo ou une video
            let medias = mediasSortedById.map(media => mediasFactory(media, sortingMedias, displayTotalLikes, displayLightbox)).sort(compare_likes);
            // appel de la balise qui contiendra l'affichage des medias dans la lightbox
            const carouselUl = document.querySelector('.carousel');
            // appel de la balise qui contiendra l'affichage des medias sur la page photographe
            const mediasSection = document.querySelector(".medias");
            //affichage des medias sur la page photographer.html 
            function displayMediasPhotographer(){
                medias.forEach((media) => {
                    mediasSection.appendChild(media.getUserCardDOM());
                    document.getElementById(`liked_${media.id}`);
                });
            }
            displayMediasPhotographer();
              // affichage des medias de la lightbox
            function displayLightboxElt(){
                mediasCarousel.forEach((media) => {
                    let li = document.createElement( 'li' );
                    carouselUl.appendChild(li);
                    li.appendChild(media.getUserCardDOM());
                    li.classList.add("carousel-item");
                    li.setAttribute('id', media.id);
                });
            }
            displayLightboxElt()
            // reload des données à l'incrémentation et tri pour la page photographer et la lightbox
            function sortingMedias(e){
                e.preventDefault();
                let actualTitleSorting  = document.querySelector('.select_sorting').innerHTML;
                mediasSection.innerHTML = '';
                mediasCarousel.forEach(() => {
                    carouselMedia.removeChild(carouselMedia.lastChild);
                });
                if (this.innerHTML == 'Titre') {
                    medias.sort(compare_title);
                    mediasCarousel.sort(compare_title);
                    closeMenu('Titre');
                }
                if (this.innerHTML == 'Popularité') {
                    medias.sort(compare_likes);
                    mediasCarousel.sort(compare_likes);
                    closeMenu('Popularité');
                } 
                if (this.innerHTML == 'Date') {
                    medias.sort(compare_date);
                    mediasCarousel.sort(compare_date);
                    closeMenu('Date');
                }
                this.innerHTML = actualTitleSorting;
                displayMediasPhotographer();
                displayLightboxElt();
            }

            function closeMenu(title){
                const dropdownMenu = document.querySelector(".dropdown");
                const titleSortingButton = document.querySelector('.select_sorting');
                const titleSorting = document.querySelector('.header-dropdown-link-content');
                if(dropdownMenu.classList.contains('dropdown_menu')){
                    dropdownMenu.classList.remove('dropdown_menu');
                    dropdownMenu.classList.add('hidden');
                    titleSortingButton.classList.add('change-border');
                    document.querySelector(".header-dropdown-link svg").setAttribute("transform","");
                    titleSortingButton.innerHTML= title;
                    titleSorting.classList.remove('border');
                    titleSorting.classList.add('change-border');
                }
                
            }
          // affichage de total des likes
            function displayTotalLikes(){
                let totalLikes = 0;
                for(let i=0; i<medias.length; i++){
                    totalLikes += medias[i].likes
                }
                return totalLikes;
            }
        
        })
        .catch(err => console.log('==== error ====', err));
}

getMedias();


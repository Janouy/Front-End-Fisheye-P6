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
            let carouselMedia = document.getElementById("lightbox-modal");
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
            function displayLightbox(){
                mediasCarousel.forEach((media) => {
                    let li = document.createElement( 'li' );
                    carouselUl.appendChild(li);
                    li.appendChild(media.getUserCardDOM());
                    li.classList.add("carousel-item");
                    li.setAttribute('id', media.id);
                });
            }
            displayLightbox()
            // reload des données à l'incrémentation et tri pour la page photographer et la lightbox
            function sortingMedias(event){
                console.log(event.target)
                let actualTitleSorting  = document.querySelector('.select-sorting').innerText;
                let sortingTitle = document.querySelector('.select-sorting-title');
                mediasSection.innerHTML = '';
                mediasCarousel.forEach(() => {
                    carouselMedia.removeChild(carouselMedia.lastChild);
                });
                if (event.target.innerText == 'Titre') {
                    medias.sort(compare_title);
                    mediasCarousel.sort(compare_title);
                    closeMenu(event.target.innerText);
                    sortingTitle.focus();
                }
                if (event.target.innerText == 'Popularité') {
                    medias.sort(compare_likes);
                    mediasCarousel.sort(compare_likes);
                    closeMenu(event.target.innerText);
                    sortingTitle.focus();
                } 
                if (event.target.innerText == 'Date') {
                    medias.sort(compare_date);
                    mediasCarousel.sort(compare_date);
                    closeMenu(event.target.innerText);
                    sortingTitle.focus();
                }
                event.target.innerText = actualTitleSorting;
                displayMediasPhotographer();
                displayLightbox();
            }
            document.querySelector('.header-dropdown-link').addEventListener('click', openMenu);
            function openMenu(e){
                e.preventDefault();
                const dropdownMenu = document.querySelectorAll(".dropdown");
               dropdownMenu.forEach((item) => {
                if(item.classList.contains('hidden')){
                    item.classList.remove('hidden');
                    item.classList.add('dropdown-menu');
                    document.querySelector(".header-dropdown-link svg").setAttribute("transform","rotate(180)");
                    
                }else if(item.classList.contains('dropdown-menu')){
                    item.classList.remove('dropdown-menu');
                    item.classList.add('hidden');
                    document.querySelector(".header-dropdown-link svg").setAttribute("transform","");
                }
               })
            
            }

            function closeMenu(title){
                const dropdownMenu = document.querySelectorAll(".dropdown");
                const titleSorting = document.querySelector('.select-sorting-title');
                dropdownMenu.forEach((item) => {
                    if(item.classList.contains('dropdown-menu')){
                        item.classList.remove('dropdown-menu');
                        item.classList.add('hidden');
                        titleSorting.classList.add('border');
                        document.querySelector(".header-dropdown-link svg").setAttribute("transform","");
                        titleSorting.innerText= title;
                    }
                })
            }

            function sortsEventHandler(event) {
                if (event.keyCode === 13) {
                    sortingMedias(event);
                }
            }
            document.querySelectorAll('.select-sorting').forEach((item) => item.addEventListener('keydown', sortsEventHandler));
            
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


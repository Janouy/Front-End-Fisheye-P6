
// fonctionnalités de tri pour l'affichage des medias sur la page photographe
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
    return parseInt(a.date) - parseInt(b.date) ;
};
function compare_likes( a, b ){
    return a.likes - b.likes;
};

let liked_media;
function selectSortingValue(Element, medias, mediasSection) {
    Element.addEventListener('change', function () {
        if (this.value === 'Titre') {
            medias.sort(compare_title);
            mediasSection.innerHTML = '';
            medias.forEach((media) => {
                mediasSection.appendChild(media.getUserCardDOM());
            });
        }else if(this.value ==='Date'){
            medias.sort(compare_date);
            mediasSection.innerHTML = '';
            medias.forEach((media) => {
                mediasSection.appendChild(media.getUserCardDOM());
            });
        }else if(this.value === 'Popularite'){
            medias.sort(compare_likes);
            medias.forEach((media) => {
                let liked_media = document.getElementById(`liked_${media.id}`);
                media.likes = liked_media.textContent;
                mediasSection.appendChild(media.getUserCardDOM());
            });
            mediasSection.innerHTML = '';
            medias.forEach((media) => {
                mediasSection.appendChild(media.getUserCardDOM());
            });
        }
    });
   
}


              
            
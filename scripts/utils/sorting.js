
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

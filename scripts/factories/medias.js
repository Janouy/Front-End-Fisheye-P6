
function mediasFactory(photographer_media, sortingMedias, displayTotalLikes, displayLightbox, buttonFocus) {
    if(Object.keys(photographer_media).includes('image')){
        return new Picture(photographer_media, sortingMedias, displayTotalLikes, displayLightbox, buttonFocus)
    }
    return new Video(photographer_media, sortingMedias, displayTotalLikes, displayLightbox, buttonFocus)
}

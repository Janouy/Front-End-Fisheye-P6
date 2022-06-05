
function mediasFactory(photographer_media, sortingMedias, displayTotalLikes, displayLightbox) {
    if(Object.keys(photographer_media).includes('image')){
        return new Picture(photographer_media, sortingMedias, displayTotalLikes, displayLightbox)
    }
    return new Video(photographer_media, sortingMedias, displayTotalLikes, displayLightbox)
}

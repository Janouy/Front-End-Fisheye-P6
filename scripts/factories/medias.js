
function mediasFactory(photographer_media, sortingMedias, displayTotalLikes) {
    if(Object.keys(photographer_media).includes('image')){
        return new Picture(photographer_media, sortingMedias, displayTotalLikes)
    }
    return new Video(photographer_media, sortingMedias, displayTotalLikes)
}

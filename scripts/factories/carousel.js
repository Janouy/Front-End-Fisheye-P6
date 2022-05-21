function carouselFactory(photographer_media, sortingMedias) {
    if(Object.keys(photographer_media).includes('image')){
        return new CarouselPicture(photographer_media, sortingMedias)
    }
    return new CarouselVideo(photographer_media, sortingMedias)
}


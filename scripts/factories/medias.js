
function mediasFactory(photographer_media) {
    if(Object.keys(photographer_media).includes('image')){
        return new Picture(photographer_media)
    }
    return new Video(photographer_media)
}

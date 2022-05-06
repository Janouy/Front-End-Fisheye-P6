
function mediasFactory(data) {
    if(Object.keys(data).includes('image')){
        return new Picture(data)
    }
    return new Video(data)
}

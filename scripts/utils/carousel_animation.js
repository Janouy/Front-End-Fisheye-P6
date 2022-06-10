let currentItemPosition = 0;
let carousel = document.querySelector('.carousel')
let carousel_item = document.getElementsByClassName('carousel-item');
let imgs = [...document.querySelectorAll(".carousel li")];

const goToNextSlide = (carousel_item, imgs) => {
    imgs.forEach((item, idx) => {
        if(item.getAttribute('style') === 'display: flex;'){
            currentItemPosition = idx;
        }
    })
    currentItemPosition += 1
        if (currentItemPosition >= 1 && currentItemPosition < carousel_item.length) {
        let currentItem = `.item-${currentItemPosition}`
        let lastItem = `.item-${currentItemPosition -1}`
        setNodeAttributes(lastItem, currentItem)
    }else if (currentItemPosition >= carousel_item.length){
        currentItemPosition = 0;
        let lastItem = `.item-${carousel_item.length -1}`
        let currentItem = `.item-${currentItemPosition }`
        setNodeAttributes(lastItem, currentItem);
    }
}

const goToPreviousSlide = (carousel_item, imgs) => {
    imgs.forEach((item, idx) => {
        if(item.getAttribute('style') === 'display: flex;'){
            currentItemPosition = idx;
        }
    })
    if(currentItemPosition > 0){
        currentItemPosition -= 1
        if (currentItemPosition  >=  1 && currentItemPosition < carousel_item.length) {
            let currentItem = `.item-${currentItemPosition}`
            let lastItem = `.item-${currentItemPosition + 1}`
            setNodeAttributes(lastItem, currentItem)
        } else if (currentItemPosition === 0){
        let lastItem = `.item-${currentItemPosition +1}`
        let currentItem = `.item-${currentItemPosition}`
        setNodeAttributes(lastItem, currentItem)
        }
    }else if(currentItemPosition === 0){
        currentItemPosition = carousel_item.length -1;
        if (currentItemPosition  >=  1 && currentItemPosition < carousel_item.length) {
            let currentItem = `.item-${currentItemPosition}`
            let lastItem = `.item-0`
            setNodeAttributes(lastItem, currentItem)
        } else if (currentItemPosition === 0){
            let lastItem = `.item-${currentItemPosition +1}`
            let currentItem = `.item-${currentItemPosition}`
            setNodeAttributes(lastItem, currentItem)
            console.log('2nd cas:',currentItem, lastItem, currentItemPosition);
        }
    }
}
const setNodeAttributes = (lastItem, currentItem) => {
    $(lastItem).css('display', 'none')
    $(currentItem).css('display', 'flex')
    $(lastItem).attr('aria-hidden', 'true')
    $(currentItem).attr('aria-hidden', 'false')
}

if(carousel.getAttribute('aria-hidden', false)){
    document.addEventListener('keydown', function(e){
        const keyCode = e.code;
        if(keyCode == 'ArrowRight'){
            goToNextSlide(carousel_item, imgs);
        }
    })
    document.addEventListener('keydown', function(e){
        const keyCode = e.code;
        if(keyCode == 'ArrowLeft'){
            goToPreviousSlide(carousel_item, imgs)
        }
    })
}
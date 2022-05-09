class CarouselVideo{
    constructor (data){
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.video = data.video;
        this.title = data.title;
        this.id = data.id;
    }

  getUserCardDOM() {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        const button_left = document.createElement('div');
        button_left.classList.add("controls");
        button_left.classList.add("controls-left");
        button_left.setAttribute("role", "button");
        const prev_img = document.createElement('span');
        prev_img.classList.add('img');
        prev_img.classList.add('prev-image');
        const arrow_left = document.createElement('i');
        arrow_left.classList.add('fa-solid','fa-angle-left');
        arrow_left.setAttribute("aria-hidden", false);
        const button_right = document.createElement('div');
        button_right.classList.add("controls");
        button_right.classList.add("controls-right");
        button_right.setAttribute("role", "button");
        const next_img = document.createElement('span');
        next_img.classList.add('img');
        next_img.classList.add('next-image');
        const arrow_right = document.createElement('i');
        arrow_right.classList.add('fa-solid','fa-angle-right');
        arrow_right.setAttribute("aria-hidden", false);
        const source_content = document.createElement('div');
        source_content.classList.add('source_content');
        const video = document.createElement( 'video' );
        video.setAttribute("controls", true);
        video.setAttribute("playsinline", true);
        const source = document.createElement('source');
        source.setAttribute("src", `${`assets/samplePhotos/${this.photographerId}/${this.video}`}`);
        source.setAttribute("type", "video/mp4");
        source.setAttribute("autoplay", false);
        slide.appendChild(button_left);
        slide.appendChild(source_content);
        slide.appendChild(button_right);
        source_content.appendChild(video);
        video.appendChild(source);
        button_left.appendChild(prev_img);
        button_right.appendChild(next_img);
        prev_img.appendChild(arrow_left);
        next_img.appendChild(arrow_right);
        let currentItemPosition = 0;
        let carousel_item = document.getElementsByClassName('carousel-item');
        let imgs = [...document.querySelectorAll(".carousel li")];
       
        const goToNextSlide = () => {
            imgs.forEach((item, idx) => {
                if(item.getAttribute('style') === 'display: flex;'){
                    currentItemPosition = idx;
                }
            })
            currentItemPosition += 1
            console.log('cas:',currentItemPosition, carousel_item.length);
            if (currentItemPosition >= 1 && currentItemPosition < carousel_item.length) {
                let currentItem = `.item-${currentItemPosition}`
                let lastItem = `.item-${currentItemPosition -1}`
                setNodeAttributes(lastItem, currentItem)
                console.log('1er cas:',currentItem, lastItem, currentItemPosition);
               
            }else if (currentItemPosition >= carousel_item.length){
                currentItemPosition = 0;
                let lastItem = `.item-${carousel_item.length -1}`
                let currentItem = `.item-${currentItemPosition }`
                setNodeAttributes(lastItem, currentItem);
                console.log('2nd cas:',currentItem, lastItem, currentItemPosition);
            }
        }
        
        const goToPreviousSlide = () => {
            imgs.forEach((item, idx) => {
                if(item.getAttribute('style') === 'display: flex;'){
                    currentItemPosition = idx;
                }
            })
            if(currentItemPosition > 0){
                currentItemPosition -= 1
                console.log('cas:',currentItemPosition, carousel_item.length);
                if (currentItemPosition  >=  1 && currentItemPosition < carousel_item.length) {
                    let currentItem = `.item-${currentItemPosition}`
                    let lastItem = `.item-${currentItemPosition + 1}`
                    setNodeAttributes(lastItem, currentItem)
                    console.log('1er cas:',currentItem, lastItem, currentItemPosition);

                } else if (currentItemPosition === 0){
                    let lastItem = `.item-${currentItemPosition +1}`
                    let currentItem = `.item-${currentItemPosition}`
                    setNodeAttributes(lastItem, currentItem)
                    console.log('2nd cas:',currentItem, lastItem, currentItemPosition);
                }
            }else if(currentItemPosition === 0){
                currentItemPosition = carousel_item.length -1;
                if (currentItemPosition  >=  1 && currentItemPosition < carousel_item.length) {
                    let currentItem = `.item-${currentItemPosition}`
                    let lastItem = `.item-0`
                    setNodeAttributes(lastItem, currentItem)
                    console.log('1er cas:',currentItem, lastItem, currentItemPosition);

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
        
        prev_img.addEventListener('click',function() {
            goToPreviousSlide()
        })
        
        next_img.addEventListener('click',function() {
            goToNextSlide()
        })
        return(slide)
    }
}
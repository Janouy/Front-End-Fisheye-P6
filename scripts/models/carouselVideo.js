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
        arrow_left.classList.add('fa');
        arrow_left.classList.add('fa-arrow-circle-left');
        arrow_left.setAttribute("aria-hidden", false);
        const button_right = document.createElement('div');
        button_right.classList.add("controls");
        button_right.classList.add("controls-right");
        button_right.setAttribute("role", "button");
        const next_img = document.createElement('span');
        next_img.classList.add('img');
        next_img.classList.add('next-image');
        const arrow_right = document.createElement('i');
        arrow_right.classList.add('fa');
        arrow_right.classList.add('fa-arrow-circle-right');
        arrow_right.setAttribute("aria-hidden", false);
        const video = document.createElement( 'video' );
        video.setAttribute("controls", true);
        video.classList.add('photograph_video');
        const source = document.createElement('source');
        source.setAttribute("src", `${`assets/samplePhotos/${this.photographerId}/${this.video}`}`);
        source.setAttribute("type", "video/mp4");
        source.setAttribute("autoplay", false);
        slide.appendChild(button_left);
        slide.appendChild(button_right);
        slide.appendChild(video);
        video.appendChild(source);
        button_left.appendChild(prev_img);
        button_right.appendChild(next_img);
        prev_img.appendChild(arrow_left);
        next_img.appendChild(arrow_right);
        return(slide)
    }
}
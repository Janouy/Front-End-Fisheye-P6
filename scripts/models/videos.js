class Video{
    constructor (data, sortingMedias, displayTotalLikes){
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.video = data.video;
        this.likes = data.likes;
        this.likesIncr = data.likes +1;
        this.date = data.date;
        this.price = data.price;
        this.id = data.id;
        this.sortingMedias = sortingMedias;
        this.displayTotalLikes = displayTotalLikes;
    }

    getUserCardDOM() {
        let totalLikes = document.querySelector('.total_likes');
        totalLikes.innerHTML = this.displayTotalLikes();
        let sorts = document.querySelectorAll(".select_sorting");
        for(let sort of sorts){
            sort.addEventListener('click', this.sortingMedias);
        };
        const article = document.createElement( 'article' );
        article.classList.add('media_photographer_page');
        const linkVideo = document.createElement('a');
        linkVideo.classList.add('video_section');
        linkVideo.setAttribute('role', 'button'); 
        linkVideo.setAttribute('tabindex', 0); 
        linkVideo.setAttribute('data-id', this.id); 
        linkVideo.setAttribute('aria-label', this.title + 'cliquer pour ouvrir dans la lightbox'); 
        linkVideo.setAttribute('onclick', `displayLightbox(${this.id})`);
        linkVideo.addEventListener('keydown', buttonEventHandler);
        const video = document.createElement( 'video' );    
        video.classList.add('photograph_video');
        const source = document.createElement('source');
        source.setAttribute("src", `${`assets/samplePhotos/${this.photographerId}/${this.video}`}`);
        source.setAttribute("type", "video/mp4");
        source.setAttribute("autoplay", false);
        const titleAndLikes = document.createElement( 'div' );
        titleAndLikes.classList.add('title_likes_media');
        const title = document.createElement('div');
        title.classList.add('media_title');
        const likes = document.createElement('div');
        likes.classList.add('media_likes');
        likes.setAttribute('id', `liked_${this.id}`);
        const likesOfMedia = document.createElement('span');
        likesOfMedia.classList.add('likesOfMedia')
        likesOfMedia.textContent = this.likes;
        const like = document.createElement('button');
        like.classList.add('like');
        const heart = document.createElement('i');
        heart.classList.add('fa-solid','fa-heart');
        like.addEventListener('click', this.incrThisLike.bind(this, likesOfMedia, totalLikes));
        like.setAttribute('aria-label', 'Cliquez pour liker la video' + this.title)
        title.textContent = this.title;
        article.appendChild(linkVideo);
        linkVideo.appendChild(video);
        video.appendChild(source);
        article.appendChild(titleAndLikes);
        titleAndLikes.appendChild(title);
        titleAndLikes.appendChild(likes);
        likes.appendChild(likesOfMedia)
        likes.appendChild(like);
        like.appendChild(heart);
        return (article);
    }

    incrThisLike(likesOfMedia, totalLikes){
        likesOfMedia.textContent = this.likesIncr;
        this.likes = this.likesIncr;
        totalLikes.innerHTML = this.displayTotalLikes();
    }

}



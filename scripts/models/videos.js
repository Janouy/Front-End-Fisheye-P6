
class Video{
    constructor (data){
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.video = data.video;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.id = data.id;
    }

    getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add('media_photographer_page');
        const section = document.createElement('section');
        section.classList.add('video_section');
        const video = document.createElement( 'video' );
        video.setAttribute('onclick', `displayLightbox(${this.id})`);
        // video.setAttribute("controls", true);
        // video.setAttribute("playsinline", true);
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
        likesOfMedia.textContent = this.likes + ' ';
        const like = document.createElement('span');
        like.classList.add('like');
        const heart = document.createElement('i');
        heart.classList.add('fa-solid','fa-heart');
        heart.setAttribute("onclick", `incrLike(${this.id})`);
        if(sessionStorage.getItem(`likes_media_${this.id}`)){
            heart.setAttribute('onclick', '');
        }
        title.textContent = this.title;
        article.appendChild(section);
        section.appendChild(video);
        video.appendChild(source);
        article.appendChild(titleAndLikes);
        titleAndLikes.appendChild(title);
        titleAndLikes.appendChild(likes);
        likes.appendChild(likesOfMedia)
        likes.appendChild(like);
        like.appendChild(heart);
        return (article);
    }

}



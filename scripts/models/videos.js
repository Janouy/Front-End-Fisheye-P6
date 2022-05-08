
class Video{
    constructor (data){
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.video = data.video;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
    }

    getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute('onclick', `displayLightbox(${this.id})`);
        const section = document.createElement('section');
        section.classList.add('video_section');
        const video = document.createElement( 'video' );
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
        const likes = document.createElement('div');
        title.textContent = this.title;
        likes.textContent = this.likes;
        article.appendChild(section);
        section.appendChild(video);
        video.appendChild(source);
        article.appendChild(titleAndLikes);
        titleAndLikes.appendChild(title);
        titleAndLikes.appendChild(likes);
        return (article);
    }
}



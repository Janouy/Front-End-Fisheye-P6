class Picture{
    constructor (data){
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.id= data.id;
    }

    getUserCardDOM() {
        const article = document.createElement( 'article' );
        const section = document.createElement('section');
        section.classList.add('image_section');
        const img = document.createElement( 'img' );
        img.setAttribute("src", `${`assets/samplePhotos/${this.photographerId}/${this.image}`}`);
        img.setAttribute("alt", "");
        img.classList.add('photograph_image');
        img.setAttribute('onclick', `displayLightbox(${this.id})`);
        const titleAndLikes = document.createElement( 'div' );
        titleAndLikes.classList.add('title_likes_media');
        const title = document.createElement('div');
        title.classList.add('media_title');
        const likes = document.createElement('div');
        likes.classList.add('media_likes');
        likes.setAttribute('id', `liked_${this.id}`);
        const like = document.createElement('span');
        like.classList.add('like');
        const heart = document.createElement('i');
        heart.classList.add('fa-solid','fa-heart');
        heart.setAttribute("onclick", `inscrLike(${this.id})`);
        title.textContent = this.title;
        likes.textContent = this.likes + ' ';
        article.appendChild(section);
        section.appendChild(img);
        article.appendChild(titleAndLikes);
        titleAndLikes.appendChild(title)
        titleAndLikes.appendChild(likes)
        likes.appendChild(like);
        like.appendChild(heart);
        return (article);
    }
   
}



class Picture{
    constructor (data, sortingMedias, displayTotalLikes, displayLightbox){
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.likes = data.likes;
        this.likesIncr = data.likes +1;
        this.date = data.date;
        this.price = data.price;
        this.id= data.id;
        this.sortingMedias = sortingMedias;
        this.displayTotalLikes = displayTotalLikes;
        this.displayLightbox = displayLightbox;
        this.liked = false;
    }

    getUserCardDOM() {
        let totalLikes = document.querySelector('.total-likes');
        totalLikes.innerHTML = this.displayTotalLikes();
        document.querySelector('.header-dropdown-link').addEventListener('click', this.openMenu);
        let sorts = document.querySelectorAll(".select-sorting");
        for(let sort of sorts){
            sort.addEventListener('click', this.sortingMedias);
        };
        const article = document.createElement( 'article' );
        article.classList.add('media-photographer-page');
        article.setAttribute('aria-hidden', false);
        const linkImg = document.createElement('div');
        linkImg.classList.add('image-section');  
        linkImg.setAttribute('data-id', this.id); 
        linkImg.setAttribute('role', 'button'); 
        linkImg.setAttribute('tabindex', 0);
        linkImg.setAttribute('aria-label', this.title + 'cliquer pour ouvrir dans la lightbox'); 
        linkImg.setAttribute('aria-hidden', 'false'); 
        linkImg.setAttribute('onclick', `displayLightbox(${this.id})`);
        linkImg.addEventListener('keydown', buttonEventHandler);
        linkImg.addEventListener('click', buttonFocus);
        const img = document.createElement('img');
        img.setAttribute("src", `${`assets/samplePhotos/${this.photographerId}/${this.image}`}`);
        img.setAttribute("alt", "");
        img.classList.add('photograph-image');
        const titleAndLikes = document.createElement( 'div' );
        titleAndLikes.classList.add('title-likes-media');
        const title = document.createElement('div');
        title.classList.add('media-title');
        const likes = document.createElement('div');
        likes.classList.add('media-likes');
        likes.setAttribute('id', `liked_${this.id}`);
        const likesOfMedia = document.createElement('span');
        likesOfMedia.classList.add('likesOfMedia')
        likesOfMedia.textContent = this.likes;
        const like = document.createElement('button');
        like.classList.add('like');
        const heart = document.createElement('i');
        if(this.liked == false){
            heart.classList.add('fa-regular','fa-heart');
            like.setAttribute('aria-label', 'Cliquez pour liker la photo' + this.title)
            like.addEventListener('click', this.incrThisLike.bind(this, likesOfMedia, totalLikes, heart, like));
        }
        if(this.liked == true){
            like.setAttribute('aria-label', 'Vous avez déjà liker' + this.title);
            heart.classList.add('fa-solid','fa-heart');
        }
        title.textContent = this.title;
        article.appendChild(linkImg);
        linkImg.appendChild(img);
        article.appendChild(titleAndLikes);
        titleAndLikes.appendChild(title)
        titleAndLikes.appendChild(likes)
        likes.appendChild(likesOfMedia)
        likes.appendChild(like);
        like.appendChild(heart);
        return (article);
    }

    incrThisLike(likesOfMedia, totalLikes, heart, like){
        this.liked = true;
        likesOfMedia.textContent = this.likesIncr;
        this.likes = this.likesIncr;
        totalLikes.innerHTML = this.displayTotalLikes();
        heart.classList.remove('fa-regular','fa-heart');
        heart.classList.add('fa-solid','fa-heart');
        like.setAttribute('aria-label', 'Vous avez déjà liker' + this.title);
    }

    openMenu(e){
        e.preventDefault();
        const dropdownMenu = document.querySelector(".dropdown");
        const titleSorting = document.querySelector('.header-dropdown-link-content');
        if(dropdownMenu.classList.contains('hidden')){
            dropdownMenu.classList.remove('hidden');
            dropdownMenu.classList.add('dropdown-menu');
            document.querySelector(".header-dropdown-link svg").setAttribute("transform","rotate(180)");
            titleSorting.classList.remove('border');
            titleSorting.classList.add('change-border');
            
        }else if(dropdownMenu.classList.contains('dropdown-menu')){
            dropdownMenu.classList.remove('dropdown-menu');
            dropdownMenu.classList.add('hidden');
            document.querySelector(".header-dropdown-link svg").setAttribute("transform","");
            titleSorting.classList.add('border');
            titleSorting.classList.remove('change-border');
        }
    }
}



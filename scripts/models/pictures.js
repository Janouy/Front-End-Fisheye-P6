class Picture{
    constructor (data, sortingMedias, displayTotalLikes){
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
    }

    getUserCardDOM() {
        let totalLikes = document.querySelector('.total_likes');
        totalLikes.innerHTML = this.displayTotalLikes();
        document.querySelector('.header-dropdown-link').addEventListener('click', this.openMenu);
        let sorts = document.querySelectorAll(".select_sorting");
        for(let sort of sorts){
            sort.addEventListener('click', this.sortingMedias);
        };
        const article = document.createElement( 'article' );
        article.classList.add('media_photographer_page');
        const linkImg = document.createElement('a');
        linkImg.setAttribute('href', '#');  
        linkImg.setAttribute('role', 'img'); 
        linkImg.classList.add('image_section');                  
        linkImg.setAttribute('aria-label', this.title + 'cliquer pour ouvrir dans la lightbox'); 
        linkImg.setAttribute('onclick', `displayLightbox(${this.id})`);
        const img = document.createElement('img');
        img.setAttribute("src", `${`assets/samplePhotos/${this.photographerId}/${this.image}`}`);
        img.setAttribute("alt", "");
        img.classList.add('photograph_image');
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
        const like = document.createElement('span');
        like.classList.add('like');
        const heart = document.createElement('i');
        heart.classList.add('fa-solid','fa-heart');
        heart.addEventListener('click', this.incrThisLike.bind(this, likesOfMedia, totalLikes, heart));
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

    incrThisLike(likesOfMedia, totalLikes, heart){
        likesOfMedia.textContent = this.likesIncr;
        this.likes = this.likesIncr;
        totalLikes.innerHTML = this.displayTotalLikes();
    }

    openMenu(e){
        e.preventDefault();
        let dropdownMenu = document.querySelector(".dropdown");
       //avant le menu est caché
        if(dropdownMenu.classList.contains('hidden')){
            dropdownMenu.classList.remove('hidden');
            dropdownMenu.classList.add('dropdown_menu');
            document.querySelector(".header-dropdown-link svg").setAttribute("transform","rotate(180)");
            
        }else if(dropdownMenu.classList.contains('dropdown_menu')){
            dropdownMenu.classList.remove('dropdown_menu');
            dropdownMenu.classList.add('hidden');
            document.querySelector(".header-dropdown-link svg").setAttribute("transform","");
        }
         
    }
}



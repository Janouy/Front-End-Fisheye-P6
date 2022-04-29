class Medias{
    constructor (data, type){
        this.photographerId = data.photographerId
        this.title = data.title
        this.image = data.image
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
        this.type = type
    }

    getUserCardDOM() {
        const article = document.createElement( 'article' );
        const section = document.createElement('section');
        section.classList.add('image_section');
        const img = document.createElement( 'img' );
        img.setAttribute("src", `${`assets/samplePhotos/${this.photographerId}/${this.image}`}`)
        img.setAttribute("alt", "")
        img.classList.add('photograph_image');
        const h2 = document.createElement( 'h2' );
        h2.textContent = this.title;
        article.appendChild(section)
        section.appendChild(h2);
        section.appendChild(img)
        return (article);
    }
}



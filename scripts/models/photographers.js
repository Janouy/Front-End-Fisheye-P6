class Photographers{
    constructor(data){
        this.name = data.name
        this.id = data.id
        this.price = data.price
        this.portrait = data.portrait
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline
    }
  
    getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add('photograph-card');
        const divDescrPhotographers = document.createElement( 'p' );
        divDescrPhotographers.classList.add('descr-photographers')
        const linkToPersonalPage = document.createElement('a')
        linkToPersonalPage.setAttribute("href", 'photographer.html?' + this.id)
        linkToPersonalPage.setAttribute("aria-label", this.name)
        const img = document.createElement( 'img' );
        img.setAttribute("src", `${`assets/Samplephotos/PhotographersIDPhotos/${this.portrait}`}`)
        img.setAttribute("alt", "")
        img.classList.add('photograph-item');
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        const location = document.createElement( 'span' );
        location.classList.add('location');
        location.textContent = this.country + ', ' + this.city;
        const tagline = document.createElement( 'span' );
        tagline.classList.add('tagline');
        tagline.textContent = this.tagline;
        const price = document.createElement( 'span' );
        price.classList.add('price');
        price.textContent = this.price + "€/jour";
        article.appendChild(linkToPersonalPage);
        article.appendChild(divDescrPhotographers);
        linkToPersonalPage.appendChild(img)
        linkToPersonalPage.appendChild(h2);
        divDescrPhotographers.appendChild(location);
        divDescrPhotographers.appendChild(tagline);
        divDescrPhotographers.appendChild(price);
        return (article);
    }
        
}


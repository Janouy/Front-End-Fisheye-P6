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
        article.classList.add('photograph_card');
        const divDescrPhotographers = document.createElement( 'div' );
        divDescrPhotographers.classList.add('descrPhotographers')
        const linkToPersonalPage = document.createElement('a')
        linkToPersonalPage.setAttribute("href", 'photographer.html?' + this.id)
        linkToPersonalPage.setAttribute("aria-label", this.name)
        const img = document.createElement( 'img' );
        img.setAttribute("src", `${`assets/Samplephotos/PhotographersIDPhotos/${this.portrait}`}`)
        img.setAttribute("alt", "")
        img.classList.add('photograph_item');
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        h2.setAttribute("aria-label", this.name)
        const location = document.createElement( 'p' );
        location.classList.add('location');
        location.textContent = this.country + ', ' + this.city;
        const tagline = document.createElement( 'p' );
        tagline.classList.add('tagline');
        tagline.textContent = this.tagline;
        const price = document.createElement( 'p' );
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


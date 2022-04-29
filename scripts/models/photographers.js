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
        const h2 = document.createElement( 'h2' );
        h2.textContent = this.name;
        h2.setAttribute("aria-label", 'Nom du phorographe: '+ this.name)
        const pLocation = document.createElement( 'p' );
        pLocation.classList.add('location');
        pLocation.textContent = this.country + ', ' + this.city;
        pLocation.setAttribute("aria-label", 'Pays du photographe: '+ this.country + 'et ville du photographe: '+ this.city )
        const pTagline = document.createElement( 'p' );
        pTagline.classList.add('tagline');
        pTagline.textContent = this.tagline;
        pTagline.setAttribute("aria-label", 'Slogan du photographe: '+ this.tagline)
        const pPrice = document.createElement( 'p' );
        pPrice.classList.add('price');
        pPrice.textContent = this.price + "€/jour";
        pPrice.setAttribute("aria-label", 'Tarif du photographe: '+ this.price + ' euros par jour')
        article.appendChild(linkToPersonalPage);
        article.appendChild(divDescrPhotographers);
        linkToPersonalPage.appendChild(img)
        linkToPersonalPage.appendChild(h2);
        divDescrPhotographers.appendChild(pLocation);
        divDescrPhotographers.appendChild(pTagline);
        divDescrPhotographers.appendChild(pPrice);
        return (article);
    }
        
};


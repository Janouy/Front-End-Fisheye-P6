class Photographer{
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
        const modalTitle = document.getElementById("modalTitle");
        modalTitle.innerHTML = "Contactez-moi <br/>" + this.name;
        const article = document.createElement( 'article' );
        article.classList.add('photograph_header-page')
        const divInfoPhotograper = document.createElement('div');
        divInfoPhotograper.classList.add('photograph_infos')
        const h1 = document.createElement('h1');
        h1.textContent = this.name;
        const pLocation = document.createElement( 'p' );
        pLocation.classList.add('location');
        pLocation.textContent = this.country + ', ' + this.city;
        pLocation.setAttribute("aria-label", 'Pays du photographe: '+ this.country + 'et ville du photographe: '+ this.city )
        const pTagline = document.createElement( 'p' );
        pTagline.classList.add('tagline');
        pTagline.textContent = this.tagline;
        pTagline.setAttribute("aria-label", 'Slogan du photographe: '+ this.tagline)
        const buttonContact = document.createElement('button');
        buttonContact.classList.add('contact_button');
        buttonContact.textContent = 'Contactez-moi';
        buttonContact.setAttribute("onclick", "displayModal()");
        const img = document.createElement( 'img' );
        img.setAttribute("src", `${`assets/Samplephotos/PhotographersIDPhotos/${this.portrait}`}`)
        img.setAttribute("alt", "")
        img.classList.add('photograph_picture');
        article.appendChild(divInfoPhotograper);
        article.appendChild(buttonContact);
        article.appendChild(img);
        divInfoPhotograper.appendChild(h1);
        divInfoPhotograper.appendChild(pLocation);
        divInfoPhotograper.appendChild(pTagline);
        return (article);
    }
    getUsercardDOMFooter(){
        const article = document.createElement('article');
        article.classList.add('priceAndLikes')
        article.textContent = this.price + '€/jour';
        return (article);
    }
}
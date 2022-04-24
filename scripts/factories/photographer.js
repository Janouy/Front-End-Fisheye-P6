

function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add('photograph_card');
        const section = document.createElement( 'section' );


        const linkToPersonalPage = document.createElement('a')
        linkToPersonalPage.setAttribute("href", 'photographer.html'+'/' +id)
        linkToPersonalPage.setAttribute("aria-label", name)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "")
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("aria-label", 'Nom du phorographe: '+name)
        const span1 = document.createElement( 'span' );
        span1.classList.add('country');
        span1.textContent = country+ ',';
        span1.setAttribute("aria-label", 'Pays du photographe: '+country)
        const span2 = document.createElement( 'span' );
        span2.classList.add('city');
        span2.textContent = ' ' +city;
        span2.setAttribute("aria-label", 'Ville du photographe: '+city)
        const div1 = document.createElement( 'div' );
        div1.classList.add('tagline');
        div1.textContent = tagline;
        div1.setAttribute("aria-label", 'Slogan du photographe: '+tagline)
        const div2 = document.createElement( 'div' );
        div2.classList.add('price');
        div2.textContent = price + "€/jour";
        div2.setAttribute("aria-label", 'Tarif du photographe: '+ price + ' euros par jour')
        article.appendChild(linkToPersonalPage);
        article.appendChild(section);
        article.appendChild(div1);
        article.appendChild(div2);
        linkToPersonalPage.appendChild(img)
        linkToPersonalPage.appendChild(h2);
        section.appendChild(span1);
        section.appendChild(span2);
        return (article);
    }
    return {name, portrait, city, country, price, tagline, id, getUserCardDOM }
}


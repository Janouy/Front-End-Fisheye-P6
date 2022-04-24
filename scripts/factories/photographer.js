

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
        const div1 = document.createElement( 'div' );
        div1.classList.add('location');
        div1.textContent = country + ', ' + city;
        div1.setAttribute("aria-label", 'Pays du photographe: '+country + 'et ville du photographe: '+city )
        const div2 = document.createElement( 'div' );
        div2.classList.add('tagline');
        div2.textContent = tagline;
        div2.setAttribute("aria-label", 'Slogan du photographe: '+tagline)
        const div3 = document.createElement( 'div' );
        div3.classList.add('price');
        div3.textContent = price + "€/jour";
        div3.setAttribute("aria-label", 'Tarif du photographe: '+ price + ' euros par jour')
        article.appendChild(linkToPersonalPage);
        article.appendChild(section);
        linkToPersonalPage.appendChild(img)
        linkToPersonalPage.appendChild(h2);
        section.appendChild(div1);
        section.appendChild(div2);
        section.appendChild(div3);
        return (article);
    }
    return {name, portrait, city, country, price, tagline, id, getUserCardDOM }
}


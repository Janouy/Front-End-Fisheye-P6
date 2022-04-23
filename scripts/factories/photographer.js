

function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add(id);
        const paragraph = document.createElement( 'p' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const span1 = document.createElement( 'span' );
        span1.textContent = country;
        const span2 = document.createElement( 'span' );
        span2.textContent = ' ' +city;
        const div1 = document.createElement( 'div' );
        div1.textContent = tagline;
        const div2 = document.createElement( 'div' );
        div2.textContent = price + "€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(paragraph);
        article.appendChild(div1);
        article.appendChild(div2);
        paragraph.appendChild(span1);
        paragraph.appendChild(span2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}


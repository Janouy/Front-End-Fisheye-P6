class Carrousel{
    constructor (data){
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.name = data.name;
        this.id = data.id;
    }

  getUserCardDOM() {
        const li = document.createElement( 'li' );
        li.classList.add("carousel-item");
        li.classList.add(this.id);
        li.setAttribute("aria-hidden", true);
        const button_left = document.createElement('div');
        button_left.classList.add("controls");
        button_left.classList.add("controls-left");
        const prev_img = document.createElement('span');
        prev_img.classList.add('img');
        prev_img.classList.add('prev-image');
        const arrow_left = document.createElement('i');
        arrow_left.classList.add('fa');
        arrow_left.classList.add('fa-arrow-circle-left');
        arrow_left.setAttribute("aria-hidden", true);
        const previous = document.createElement('p');
        previous.classList.add('src-only')
        const picture = document.createElement('div');
        picture.classList.add('caroussel-picture');
        const source = document.createElement('img');
        source.setAttribute("src", `${`assets/samplePhotos/${this.photographerId}/${this.image}`}`);
        source.setAttribute("alt", "this.name");
        const name = document.createElement('div');
        name.textContent = this.name;
        li.appendChild(button_left);
        li.appendChild(picture);
        button_left.appendChild(prev_img);
        button_left.appendChild(previous);
        prev_img.appendChild(arrow_left);
        picture.appendChild(source);
        picture.appendChild(name);
        return (li);
    }
}

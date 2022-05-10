class Likes{
    constructor (data){
        this.photographerId = data.photographerId;
        this.likes = data.likes; 
        this.data = data; 
    }
    
    getUsercardDOMFooter(){
        const likes = document.createElement('div');
        likes.classList.add('totalLikes');
        likes.textContent = this.likes + ' ';
        const heart = document.createElement('i');
        heart.classList.add('fa-solid','fa-heart');
        likes.appendChild(heart);
        return (likes);
    }
}
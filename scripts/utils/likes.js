function inscrLike(picture_id){
    const liked_media = document.getElementById(`liked_${picture_id}`);
    liked_media.textContent = parseInt(liked_media.textContent)+1 + ' ';
    const heart = document.createElement('i');
    heart.classList.add('fa-solid','fa-heart');
    liked_media.appendChild(heart);
    const totalLikes = document.querySelector('.totalLikes');
    totalLikes.textContent = parseInt(totalLikes.textContent)+1 + ' ';
    const heart2 = document.createElement('i');
    heart2.classList.add('fa-solid','fa-heart');
    totalLikes.appendChild(heart2);
}
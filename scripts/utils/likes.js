//function incrLike(picture_id){
//     const liked_media = document.getElementById(`liked_${picture_id}`);
//     const heart_media = document.querySelector(`#liked_${picture_id} .like i`);
//     heart_media.setAttribute('onclick', '');
//     liked_media.textContent = parseInt(liked_media.textContent)+1 + ' ';
//     const heart = document.createElement('i');
//     heart.classList.add('fa-solid','fa-heart');
//     liked_media.appendChild(heart);
//     const totalLikes = document.querySelector('.totalLikes');
//     totalLikes.textContent = parseInt(totalLikes.textContent)+1 + ' ';
//     const heart2 = document.createElement('i');
//     heart2.classList.add('fa-solid','fa-heart');
//     totalLikes.appendChild(heart2);
// }


function incrLike(element, liked_media, media) {
    element.addEventListener('click', function () {
    liked_media.textContent = parseInt(liked_media.textContent)+1 + ' ';
    const heart = document.createElement('i');
    heart.classList.add('fa-solid','fa-heart');
    //media.id = liked_media.textContent;
    liked_media.appendChild(heart);
    const totalLikes = document.querySelector('.totalLikes');
    totalLikes.textContent = parseInt(totalLikes.textContent)+1 + ' ';
    const heart2 = document.createElement('i');
    heart2.classList.add('fa-solid','fa-heart');
    totalLikes.appendChild(heart2);
    });
}

// function incrLike(element, liked_media, media_id) {
//     element.addEventListener('click', function (event) {
//     if(localStorage.getItem(`likes_media_${media_id}`)){
//         event.preventDefault();
//     }
//     liked_media.textContent = parseInt(liked_media.textContent)+1 + ' ';
//     localStorage.setItem(`likes_media_${media_id}`, media_id);
//     const heart = document.createElement('i');
//     heart.classList.add('fa-solid','fa-heart');
//     liked_media.appendChild(heart);
//     const totalLikes = document.querySelector('.totalLikes');
//     totalLikes.textContent = parseInt(totalLikes.textContent)+1 + ' ';
//     const heart2 = document.createElement('i');
//     heart2.classList.add('fa-solid','fa-heart');
//     totalLikes.appendChild(heart2);

//     });
// }

function incrLike(picture_id){
    sessionStorage.setItem(`likes_media_${picture_id}`, picture_id);
    const liked_media = document.querySelector(`#liked_${picture_id} .likesOfMedia`);
    liked_media.textContent = parseInt(liked_media.textContent)+1 + ' ';
    const heart = document.querySelector(`#liked_${picture_id} .like i`);
    const totalLikes = document.querySelector('.totalLikes');
    totalLikes.textContent = parseInt(totalLikes.textContent)+1 + ' ';
    const heart2 = document.createElement('i');
    heart2.classList.add('fa-solid','fa-heart');
    totalLikes.appendChild(heart2);
    setTimeout(heart.setAttribute('onclick', ''), 100);
  
}
//factories de l'affichage des médias sur la page photographer, si le fichier est une image, le modèle d'affichage sera l'objet Picture sinon Vidéo
function mediasFactory(
  photographer_media,
  sortingMedias,
  displayTotalLikes,
  incrThisLike
) {
  if (Object.keys(photographer_media).includes('image')) {
    return new Picture(
      photographer_media,
      sortingMedias,
      displayTotalLikes,
      incrThisLike
    )
  }
  return new Video(
    photographer_media,
    sortingMedias,
    displayTotalLikes,
    incrThisLike
  )
}

//factories de la lightbox, si le fichier est une image, le modèle d'affichage sera l'objet CarouselPicture sinon CarouselVidéo
function carouselFactory(photographer_media, mediasLength) {
  if (Object.keys(photographer_media).includes('image')) {
    return new CarouselPicture(photographer_media, mediasLength)
  }
  return new CarouselVideo(photographer_media, mediasLength)
}

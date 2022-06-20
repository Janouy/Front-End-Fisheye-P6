// fonctionnalités de tri pour l'affichage des medias sur la page photographe
function compareTitle(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1
  }
  return 0
}
function compareDate(a, b) {
  return parseInt(a.date, 10) - parseInt(b.date, 10)
}

function compareLikes(a, b) {
  return a.likes - b.likes
}

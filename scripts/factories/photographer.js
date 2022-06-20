// factory pour les photographes, si le type est mainPage le modèle retournné sera mainPage sinon est photographerPage, le type est défini dans  /pages/index.js et /pages/photographer.js
function PhotographerFactory(data, type) {
  if (type == 'mainPage') {
    return new Photographers(data)
  }
  if (type == 'photographerPage') {
    return new Photographer(data)
  }
}

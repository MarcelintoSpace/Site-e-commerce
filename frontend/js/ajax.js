//Création d'une requête
let request = obj => {
  //création d'une Promise resolve ou reject
  return new Promise((resolve, reject) => {
    //création d'une requête XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //ouverture de la requête avec la méthode GET
    xhr.open(obj.method || "GET", obj.url);
    if (obj.headers) {
      Object.keys(obj.headers).forEach(key => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }

// vérification de la réponse de l'API
    xhr.onload = () => {
      //vérification d'un code de succès
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        //vérification code erreur API
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(obj.body);
  });
};

module.exports = ajax;

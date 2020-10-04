//appel de l'API 3GET"
let request = obj => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);
    if (obj.headers) {
      Object.keys(obj.headers).forEach(key => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }

// vérification de la réponse de l'API
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(obj.body);
  });
};

// appel de l'API "POST"
function ajaxPost(url, data, isJson) {
var req = new XMLHttpRequest();
req.onload = () => {
  if (req.status >= 200 && req.status < 300) {
    resolve(req.response);
  } else {
    reject(req.statusText);
  }
};
req.onerror = () => reject(req.statusText);
};
req.open("POST", "http://localhost:3000/api/teddies");
req.setRequestHeader("Content-Type", "application/json");
data = JSON.stringify(data);
req.send(data);

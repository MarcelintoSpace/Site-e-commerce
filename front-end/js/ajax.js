let request = obj => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);
    if (obj.headers) {
      Object.keys(obj.headers).forEach(key => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }
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
request({
    url: "http://localhost:3000/api/teddies"
  })
  .then(data => {
    let teddies = JSON.parse(data);
    let html = "";
    teddies.forEach(ted => {
      html += `
                <div id="teddy">
                    <img class="img-container" src='${ted.imageUrl}'/>
                        <h3>${ted.name}</h3></br>
                        <h4>${ted.description}</h4> </br>
                        <h3>${ted.price/100 + "€"}</h3></br>
<a id="myBtn" class="add-to-cart" href = 'produit.html?id=${ted._id}'><span>Plus d'infos !</span></a></br>
                </div> </br>`;
                  });
    document.getElementsByClassName("flex-container")[0].innerHTML = html;
  })
  .catch(error => {
    console.log(error);
  });

// récupération des produits

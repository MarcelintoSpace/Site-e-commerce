//appel de l'url de l'API
request({
    url: "http://localhost:3000/api/teddies"
  })

//mise en forme
  .then(data => {
    //transformation du JSON en objet
    let teddies = JSON.parse(data);
    //mise en forme html
    let html = "";
    teddies.forEach(ted => {
      html += `
                <div id="teddy">
                <img class="img-container" src='${ted.imageUrl}'/>
                <h3>${ted.name}</h3></br>
                <h4>${ted.description}</h4> </br>
                <h3>${ted.price/100 + "€"}</h3></br>
                <a id="myBtn" class="add-to-cart" href = 'ourson.html?id=${ted._id}'><span>Plus d'infos !</span></a></br>
                </div> </br>`;
                  });

//insertion dans la page
    $('.flex-container')[0].innerHTML = html;
  })
  .catch(error => {
    console.log(error);
  });

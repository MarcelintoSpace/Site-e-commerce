// recherche de l'id dans l'URL
let params = new URLSearchParams(document.location.search);
let idProduit = params.get("id");

// appel Ajax
var request = new XMLHttpRequest();
//récupération dans l'API du produit grâce à l'url + id
request.open('GET', 'http://localhost:3000/api/teddies/' + idProduit);

//mise en forme des données
request.onload = function() {
  var ted = JSON.parse(request.response);

  // mise en forme html du sélecteur de couleurs
  let select = "<select id='couleur'>";
  ted.colors.forEach((item, i) => {
    select += "<option>" + item + "</option>";
  });
  select += "</select>";

  //insertion du  HTML
  $('#tedArticle').append(`
                <div id="teddy">
                <div class="articleIMG">
                <img class="img-container" src='${ted.imageUrl}'/>
                </div>
                <div class="optionArt">
                <h3>${ted.name}</h3></br>
                <h4>${ted.description}</h4> </br>
                ${select}</br>
                <h3>${ted.price/100 + "€"}</h3></br>
                <a id="btnProduct" class="add-to-prod" href = 'ourson.html?id=${ted._id}'><span> Commander </span></a></br>
                </div> </div></br>`);

  //enregistrement dans le LocalStorage des données du panier
  $('#btnProduct').click(e => {
    e.preventDefault();
    let couleur = $('#couleur option:selected').text();
    const article = {
      //données du panier
      id: ted._id,
      name: ted.name,
      color: couleur,
      price: ted.price / 100
    }
    
    let panier = JSON.parse(localStorage.getItem('panier')) ?? [];
    panier.push(article);
    window.localStorage.setItem('panier', JSON.stringify(panier));
    alert("L'article a bien été ajouté à votre panier")
  })

};
request.send();

// compte a rebourd
function countdownTimeStart() {

  var countDownDate = new Date("Sep 25, 2025 17:00:00").getTime();

  var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    // calcul du temps
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // insertion du décompte dans le html
    $('#timer').html(hours + "h " + minutes + "m " + seconds + "s ");

    if (distance < 0) {
      clearInterval(x);
      $('#timer').append("Trop tard, la Promo de -70% a expiré !");
    }
  }, 1000);
}

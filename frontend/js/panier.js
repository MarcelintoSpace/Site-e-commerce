// création du panier
var panier = [];
$(function() {
  panier = JSON.parse(localStorage.getItem('panier')) ?? [];
  showCart();
});

function addToCart() {
  var price = $("#price").val();
  var name = $("#name").text();
  var color = $("#colors").text();


  // création de l'object javascript
  var item = {
    Product: name,
    Price: price,
    Color: colors
  };
  panier.push(item);
  saveCart();
  showCart();
}

// supprimer un article
function deleteItem(index) {
  panier.splice(index, 1);
  showCart();
  saveCart();
  alert('Votre article est bien supprimé');
}

function saveCart() {
  if (window.localStorage) {
    localStorage.panier = JSON.stringify(panier);
  }
}

// panier vide
function showCart() {
  if (panier.length == 0) {
    $("#cart").css("display", "none");
    $('#ssTotal').css("display", "none");
    $('#messPanier').html("Votre panier est vide");
    $('.formulaire').css("display", "none");
    return;
  }

// mise en forme du tableau des articles
  $("#cart").css("visibility", "visible");
  $("#cartBody").empty();
    let sumSubTotal = 0;
    let productid = [];
  for (var i in panier) {
    console.log(i, panier);
    var item = panier[i];
    var row = "<tr><caption>Votre Commande</caption><td>" + item.name + "</td><td>" + item.color + "</td><td id='price'>" +
      item.price + "€</td><td>" +
      "<button onclick='deleteItem(" + i + ")'><span><i class='far fa-trash-alt fa-lg'></i></span></button></td></tr>";
 // sous-total
    $("#cartBody").append(row);
    sumSubTotal = sumSubTotal + item.price;
    productid.push(item.id);
  }
  $('#subTotal').html("Votre panier est de " + sumSubTotal + " €");


// le formulaire et le panier
var form = document.querySelector("form");
$('form').on("submit", function(e) {
  e.preventDefault();
  let data = {
    contact:{
      firstName:$('#firstname').val(),
      lastName:$('#lastname').val(),
      address:$('#adresse').val(),
      city:$('#ville').val(),
      email:$('#email').val()
    },
    products:productid

  };
  //envoi des données vers l'API
    request({
    url:"http://localhost:3000/api/teddies/order",
    method:"POST",
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(data)

//demande du numéro de commande
  }).then(function (reponse){
    let retourApi = JSON.parse(reponse);
    window.localStorage.setItem('orderId', retourApi.orderId);

// LocalStorage pour sous total confirmation
let totalCommande = JSON.stringify(sumSubTotal);
localStorage.setItem('sumSubTotal', totalCommande);

// redirection page de confirmation
    location.href = "confirmation.html";

  });
});
}

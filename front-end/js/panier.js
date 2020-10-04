// création du panier
var panier = [];
$(function() {
  panier = JSON.parse(localStorage.getItem('panier')) ?? [];
  showCart();
});

function addToCart() {
  var price = $("#price").val();
  var name = $("#name").text();
  var color = $("#colors option:selected").text();


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
    $('#formulaire').css("display", "none");
    return;
  }

  $("#cart").css("visibility", "visible");
  $("#cartBody").empty();
  for (var i in panier) {
    console.log(i, panier);
    var item = panier[i];
    var row = "<tr><td>" + item.name + "</td><td>" + item.color + "</td><td class='price'>" +
      item.price + "</td><td>" +
      "<button onclick='deleteItem(" + i + ")'><span><i class='far fa-trash-alt fa-lg'></i></span></button></td></tr>";

    $("#cartBody").append(row);
  }
}

// calcul Total du panier
var table = $('#cart'),
  sumSubTotal = 0;

for (var i = 1; i < table.rows.length; i++) {
  sumSubTotal = sumSubTotal + parseInt(table.rows[i].cells[2].innerHTML);
}

$('#subTotal').html("Votre panier est de " + sumSubTotal + " €");

// envoi des données à l'api

// le formulaire et le panier
var form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  var data = new FormData(form);
  ajaxPost("http://localhost:3000/api/teddies", data, function(reponse) {
    window.location.href = 'confirmation.html';
    var messageElt = document.createElement("p");
    messageElt.textContent = "Votre commande est bien confirmée";
    $('#confirmation').appendChild(messageElt);
  });
});

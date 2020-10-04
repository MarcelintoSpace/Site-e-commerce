// création du panier
var panier = [];
       $(function () {
              panier = JSON.parse(localStorage.getItem('panier')) ?? [];
               showCart();
             });

       function addToCart() {
           var price = $("#price").val();
           var name = $("#name").text();
           var color = $("#colors option:selected").text();


// création de l'object javascript
           var item = { Product: name,  Price: price, Color: colors };
           panier.push(item);
           saveCart();
           showCart();
       }

// supprimer un article
       function deleteItem(index){
           panier.splice(index,1);
           showCart();
           saveCart();
       }

       function saveCart() {
           if ( window.localStorage)
           {
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
                            item.price + "</td><td>"
                            + "<button onclick='deleteItem(" + i + ")'><span><i class='far fa-trash-alt fa-lg'></i></span></button></td></tr>";

               $("#cartBody").append(row);
           }
       }

// calcul Total
var sum = 0;
$('.price').each(function() {
    sum += parseFloat($(this).text());
});
$('#subTotal').html(sum);

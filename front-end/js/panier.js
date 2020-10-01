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
           var qty = $("#qty").val();

// mise a jour des quantités
           for (var i in panier) {
               if(panier[i].Product == name)
               {
                   panier[i].Qty = qty;
                   showCart();
                   saveCart();
                   return;
               }
           }
// création de l'object javascript
           var item = { Product: name,  Price: price, Qty: qty, Color: colors };
           panier.push(item);
           saveCart();
           showCart();
       }

// supprimer un article
       function deleteItem(index){
           cart.splice(index,1);
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
               $('#messPanier').html("Votre panier est vide");
               $('#formulaire').css("display", "none");
            return;
           }

           $("#cart").css("visibility", "visible");
           $("#cartBody").empty();
           for (var i in panier) {
             console.log(i, panier);
               var item = panier[i];
               var row = "<tr><td>" + item.name + "</td><td>" +
                            item.price + "</td><td>" + item.color + "</td><td>" + item.Qty + "</td><td>"
                            + item.Qty * item.price + "</td><td>"
                            + "<button onclick='deleteItem(" + i + ")'>Delete</button></td></tr>";
               $("#cartBody").append(row);
           }
       }

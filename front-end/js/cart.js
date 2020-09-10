// comportement du panier au survol pour affichage de son contenu
var timeout;

$('#cart').on({
    mouseenter: function() {
        $('#cart-dropdown').show();
    },
    mouseleave: function() {
        timeout = setTimeout(function() {
            $('#cart-dropdown').hide();
        }, 200);
    }
});

// le cache quand la souris sort
$('#cart-dropdown').on({
    mouseenter: function() {
        clearTimeout(timeout);
    },
    mouseleave: function() {
        $('#cart-dropdown').hide();
    }
});

// remplissage du panier



function ajouter()
          {
              var nom = parseInt(document.getElementById("name").value);
              var prix = parseInt(document.getElementById("price").value);
              var monPanier = new Panier();
              monPanier.ajouterArticle(nom, prix);
              var tableau = document.getElementById("tableau");
              var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
              if (longueurTab > 0)
              {
                  for(var i = longueurTab ; i > 0  ; i--)
                  {
                      monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML));
                      tableau.deleteRow(i);
                  }
              }
              var longueur = monPanier.liste.length;
              for(var i = 0 ; i < longueur ; i++)
              {
                  var ligne = monPanier.liste[i];
                  var ligneTableau = tableau.insertRow(-1);
                  var colonne1 = ligneTableau.insertCell(0);
                  colonne1.innerHTML += ligne.getCode();
                  var colonne2 = ligneTableau.insertCell(1);
                  colonne2.innerHTML += ligne.qteArticle;
                  var colonne3 = ligneTableau.insertCell(2);
                  colonne3.innerHTML += ligne.prixArticle;
                  var colonne4 = ligneTableau.insertCell(3);
                  colonne4.innerHTML += ligne.getPrixLigne();
                  var colonne5 = ligneTableau.insertCell(4);
                  colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
              }
              document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
              document.getElementById("nbreLignes").innerHTML = longueur;
          }

          function supprimer(code)
          {
              var monPanier = new Panier();
              var tableau = document.getElementById("tableau");
              var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
              if (longueurTab > 0)
              {
                  for(var i = longueurTab ; i > 0  ; i--)
                  {
                      monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[2].innerHTML));
                      tableau.deleteRow(i);
                  }
              }
              monPanier.supprimerArticle(code);
              var longueur = monPanier.liste.length;
              for(var i = 0 ; i < longueur ; i++)
              {
                  var ligne = monPanier.liste[i];
                  var ligneTableau = tableau.insertRow(-1);
                  var colonne1 = ligneTableau.insertCell(0);
                  colonne1.innerHTML += ligne.getCode();
                  var colonne2 = ligneTableau.insertCell(1);
                  colonne2.innerHTML += ligne.qteArticle;
                  var colonne3 = ligneTableau.insertCell(2);
                  colonne3.innerHTML += ligne.prixArticle;
                  var colonne4 = ligneTableau.insertCell(3);
                  colonne4.innerHTML += ligne.getPrixLigne();
                  var colonne5 = ligneTableau.insertCell(4);
                  colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
              }
              document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
              document.getElementById("nbreLignes").innerHTML = longueur;
          }

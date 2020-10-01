document.forms["formulaire"].addEventListener("submit", function(e) {

  var erreur;

  var inputs = this;

  for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
      erreur = "Veuillez renseigner tous les champs";
    }
  }

  if (erreur) {
      e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  } else {
      alert('Votre commande est validée !');
  }


});

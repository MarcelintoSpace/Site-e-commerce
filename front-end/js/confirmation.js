//****page confirmation****

//localStorage getItem id commande
let order_id = localStorage.getItem('orderId');
$('#orderId').text(order_id);

//localStorage getItem prix commande
let totalCommande = localStorage.getItem('sumSubTotal');
$('#prix').text(totalCommande);

// suppression localStorage
localStorage.clear();

//alerte traitement de Commander
function alerteCommande(){
alert("votre commande est en court de traitement")
  }
  setTimeout("alerteCommande()",8000);

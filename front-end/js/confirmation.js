//****page confirmation****

//localStorage getItem
var order_id = [];
$(function() {
  commande = JSON.parse(localStorage.getItem('orderId')) ?? [];
});

$('#clear').onclick = clear_me;

function clear_me() {
    localStorage.clear();
}

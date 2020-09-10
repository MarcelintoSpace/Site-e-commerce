function ajaxApi(){
if (window.XMLHttpRequest)
var xhr = new XMLHttpRequest();
else
var xhr = new activeXObject("Microsoft.XMLHTTP");
console.log("Avant Open");
xhr.open('GET', 'http://localhost:3000/api/teddies', true);
console.log("Après Open");
xhr.onreadystatechange = function(){
  console.log("Executed", xhr.readyState);
};
  if (xhr.readyState == 4 && this.status == 200) {
    console.log(xhr.responseText);
    document.getElementsByTagName('text').innerhtml = xhr.responseText;
  }
  else if (this.readyState == 4 && this.status == 404) {
alert("Erreur 404 😢");
}
};
xhr.send();
}


const apiUrl = 'http://localhost:3000/api/teddies';
async function getColors() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const { name, price } = data;
  document.getElementById('nameteddie').textContent = name;
  document.getElementById('priceteddie').numberContent = price;
}
getColors();


var nomTeddies = document.getElementById("nom");

var maRequete = new XMLHttpRequest();
maRequete.open("GET", "http://localhost:3000/api/teddies");
maRequete.onload = function(){
  var mesData = JSON.parse(maRequete.responseText);
  renderHTML(mesData);
};
maRequete.send();

function renderHTML(data){
  var htmlString = "";
  for (i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].name"</p>";
      }
    imagesTeddies.insertAdjacentHTML('beforeend', htmlString);
}

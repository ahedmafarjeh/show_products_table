
products = [];
document.querySelector("button").onclick = function(e){
  e.preventDefault(); 
  item = {
    name: document.querySelector("#name").value ,
    description: document.querySelector("#description").value,
    price: document.querySelector("#price").value  ,
  }
  products.push(item);
  showData();
}

function showData(){
  var data = "";
  for(var i=0; i<products.length; i++){
    data += `
    <tr>
    <td>${products[i].name}</td>
    <td>${products[i].description}</td>
    <td>${products[i].price}</td>
    </tr>
    `
  }
  document.querySelector("tbody").innerHTML = data;
}


let data = JSON.parse(localStorage.getItem("wind"));

const appendData = (data) => {
  let img = document.createElement("img");
  img.src = data.image;

  document.getElementById("full1").append(img);

  var cName = document.createElement("h3");
  cName.innerText = "Bewakoof";

  var pName = document.createElement("h1");
  var a=data.title.split(" ")
  pName.innerText = a[0]+" "+a[1]
  var des = document.createElement("h3");
  des.innerText = data.title;

  var pPrice = document.createElement("h1");
  pPrice.innerText = data.price.current_price;

  var rating = document.createElement("h3");
  rating.innerText = "Reviews(" + data.review.rating + ")";
  document.getElementById("full2").append(cName, pName, pPrice, des, rating);
};
appendData(data);
var bag=document.getElementById("bag").addEventListener("click",()=>{
    addbag()
})
var bagarr=JSON.parse(localStorage.getItem("cart"))||[]

function addbag()
{
    
    
    bagarr.push(data)
    localStorage.setItem("cart",JSON.stringify(bagarr))

}

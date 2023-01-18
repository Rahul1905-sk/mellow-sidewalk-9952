
import {navbar} from "../components/navbar.js"
import {footerSection} from "../components/footer.js"
import {loader} from "../components/loader.js"
loader()

let footerdiv = document.querySelector("#footer");
footerdiv.innerHTML = footerSection ()

let navbardiv = document.querySelector("#navbar");
navbardiv.innerHTML = navbar();

// let cartlength=JSON.parse(localStorage.getItem("cart"));
// document.getElementById("cart_no").innerText=cartlength.length;

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

  let div=document.createElement("div");
  div.style.display="flex";
  div.style.alignItems="center";
  

  var pPrice = document.createElement("h1");
  pPrice.innerText ="₹ "+ data.price.current_price+" ";
  pPrice.style.fontSize="20px";
  pPrice.style.fontWeight="bold";
  pPrice.style.marginTop="15px";


  let del=document.createElement("del");
  del.innerText=" ₹"+data.price.before_price;
  del.style.color="grey";
  del.style.marginLeft="10px"

  let percent=document.createElement("p");
  percent.innerText=data.price.savings_percent+"% OFF"
  percent.style.color="#19bf63";
  percent.style.fontSize="17px";
  percent.style.fontWeight="bold";
  percent.style.marginLeft="10px";

  let taxes=document.createElement("p");
  taxes.innerText="inclusive of all taxes";
  taxes.style.fontSize="13px";
  taxes.style.color="grey";
  taxes.style.marginTop="-15px";

div.append(pPrice,del,percent);
  var rating = document.createElement("h3");
  rating.innerText = "Reviews(" + data.review.rating + ")";
  document.getElementById("full2").append(cName, pName, div,taxes, des, rating);
};
appendData(data);
const bag=document.getElementById("bag").addEventListener("click",()=>{
    
        addbag();
})
var bagarr=JSON.parse(localStorage.getItem("cart"))||[]



function addbag()
{
  let checkLogin =  localStorage.getItem("email") || null;
  // function add() {
    if (checkLogin != null) {
      bagarr.push(data)
      localStorage.setItem("cart", JSON.stringify(bagarr));
      // showCount();
      alert("Added to Cart");

      window.location.reload();
    } else {
      alert("Login To your Account First");
    }
  // }


  // bagarr.push(data)
  // localStorage.setItem("cart",JSON.stringify(bagarr))
  // alert("Product added to cart")

}



let cartlength=JSON.parse(localStorage.getItem("cart")) || [];
if (cartlength == undefined) {
  cartlength = [];
} 
  document.getElementById("cart_no").innerText=cartlength.length;


let username=localStorage.getItem("username");
let useremail=localStorage.getItem("email");
let usernum=localStorage.getItem("mobile");

if(username!=null && useremail!=null && usernum!=null){
  document.getElementById("profile").style.display="block";
  document.getElementById("loginid").style.display="none";
}else{
  document.getElementById("profile").style.display="none";
  document.getElementById("loginid").style.display="block";
}

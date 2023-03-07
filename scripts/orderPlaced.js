

import {navbar} from "../components/navbar.js";
import { footerSection } from "../components/footer.js";
import {loader} from "../components/loader.js"
loader()


let navbar1 = document.querySelector("#navbar");
navbar1.innerHTML = navbar();


let footer1=document.getElementById("footer");
footer1.innerHTML = footerSection();

// let cartlength=JSON.parse(localStorage.getItem("cart"));
// document.getElementById("cart_no").innerText=cartlength.length;


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


// let orderDetails = JSON.parse(localStorage.getItem("final"));

// async function pushOrderDetails () {

//     let res = await fetch (`https://mock-server-wxg2.onrender.com/order_details`, {
//         method: "POST",
//         body: JSON.stringify(orderDetails),
//         headers : {
//             "Content-Type" : "application/json"
//         }
//     })
// }

// // pushOrderDetails();
import {navbar} from "../components/navbar.js";

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

let mobile;
let login_btn=document.getElementById("login");
login_btn.onclick=()=>{
    mobile=document.getElementById("mobile").value;
   Login();
}

let check=document.getElementById("mobile");
check.oninput=()=>{ 
    count();
}
document.getElementById("email").onclick=()=>{
    //Emaillogin();
    window.location.href=("email.html");
   
}

// let cartlength=JSON.parse(localStorage.getItem("cart"));
// document.getElementById("cart_no").innerText=cartlength.length;

const  Login=()=>{
    if(mobile.length==10){
        localStorage.setItem("phone",mobile);
        window.location.href="signup.html";
    }else{
        document.getElementById("valid_num").innerText="Please Enter a Vlid Mobile Number";
        document.getElementById("login").style.marginTop="35px";
        document.getElementById("input_div").style.border="1px solid red";
        document.getElementById("valid_num").style.marginLeft="-47%";
    }

}
const count=()=>{
    console.log(document.getElementById("valid_num").value);
    document.getElementById("valid_num").innerText=null;
    document.getElementById("login").style.marginTop="20px";
    document.getElementById("input_div").style.border="1px solid  #aaaaaa";
}

// const Emaillogin=()=>{
//     window.location.href=("email.html");
// }




let cartlength=JSON.parse(localStorage.getItem("cart")) || [];
if (cartlength == undefined) {
  cartlength = [];
} 
  document.getElementById("cart_no").innerText=cartlength.length;


  
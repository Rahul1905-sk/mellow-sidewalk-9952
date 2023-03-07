import {navbar} from "../components/navbar.js";

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


document.getElementById("login_btn").onclick=()=>{

    userlogin();
}
document.getElementById("email").oninput=()=>{
    check();
}
document.getElementById("pass").oninput=()=>{
    check();
}

// let cartlength=JSON.parse(localStorage.getItem("cart"));
// document.getElementById("cart_no").innerText=cartlength.length;

const userlogin=async()=>{
  
    let obj={
        email:document.getElementById("email").value,
        pass:document.getElementById("pass").value,
    }

    try{
      let res=await fetch(`https://mock-server-wxg2.onrender.com/User`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
      }
      })
      res=await res.json();
      console.log(res);
      let flag=false;
      let username;
      let saveemail;
      let num;
      res.forEach((el)=>{
        if(obj.email==el.email && obj.pass==el.pass){
            flag=true;
            username=el.name;
            saveemail=el.email;
            num=el.mobile;
            
        }
        console.log(el.email,el.pass);
      })
      if(flag==true){
        localStorage.setItem("username",username);
        localStorage.setItem("email",saveemail);
        localStorage.setItem("mobile",num);
        
        window.location.href="index.html";
      }else{
        alert("Wrong Email or Password");
      }
    }
    catch(err){
      console.log(err);
    } 
  }

  const check=()=>{
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    if(email.length>0 && pass.length>0){
        document.getElementById("login_btn").style.backgroundColor="#42a2a2";
    }else{
        document.getElementById("login_btn").style.backgroundColor="#989898";
    }
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

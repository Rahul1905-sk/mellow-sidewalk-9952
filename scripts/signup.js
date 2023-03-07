import {navbar} from "../components/navbar.js";
import {loader} from "../components/loader.js"
loader()

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

// let cartlength=JSON.parse(localStorage.getItem("cart"));
// document.getElementById("cart_no").innerText=cartlength.length;

const load=()=>{
    let phone=localStorage.getItem("phone");
    console.log(phone)

    document.getElementById("mobile").value=phone;
}
load();
document.getElementById("proceed_btn").onclick=()=>{
    getData();
}

document.getElementById("name").oninput=()=>{
    signup();
}
document.getElementById("mobile").oninput=()=>{
    signup();
}
document.getElementById("email").oninput=()=>{
    signup();
}
document.getElementById("pass").oninput=()=>{
    signup();
}


const signup=()=>{
    let name=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;

    if(name.length>0 && mobile.length==10 && email.length>0 && pass.length>=6){
        document.getElementById("proceed_btn").style.backgroundColor="#42a2a2"
    }else{
        document.getElementById("proceed_btn").style.backgroundColor="#989898"
    }
}

const getData=async()=>{
    let obj={
         name:document.getElementById("name").value,
    mobile:document.getElementById("mobile").value,
    email:document.getElementById("email").value,
    pass:document.getElementById("pass").value,
    }
    let get=await fetch(`https://mock-server-wxg2.onrender.com/User`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }
    })
    get=await get.json()
    console.log(get);
    let flag=true;
    
    get.forEach((el)=>{
        if(obj.email==el.email){
            flag=false
            alert("User already exists");
            
        }
        console.log(el.email)
    })
    if(flag==true){
        if( obj.pass.length>=6){
            let res=await fetch(`https://mock-server-wxg2.onrender.com/User`,{
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/json",
                }
            })
            localStorage.setItem("username",obj.name);
            window.location.href="email.html";
            
        }else if(obj.mobile.length!==10 ){
            document.getElementById("valid_num").innerText="Please Enter a Valid Mobile Number";
            document.getElementById("login").style.marginTop="9%";
            document.querySelector("#input_div").style.border="2px solid red";
            document.getElementById("mobile").style.borderBottom="2px solid red";
        }
        else{
            document.getElementById("wrong_pass").innerText="Enter at least 6 characters";
            document.getElementById("whatsapp").style.marginTop="35px";
            document.getElementById("pass").style.borderBottom="2px solid red";
            
        }

    }
        

}



let cartlength=JSON.parse(localStorage.getItem("cart")) || [];
if (cartlength == undefined) {
  cartlength = [];
} 
  document.getElementById("cart_no").innerText=cartlength.length;

